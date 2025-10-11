import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio_flutter_web/constants/breakpoints.dart';
import '../../../common/widgets/home_background.dart';
import '../../../constants/text.dart';
import '../../../router/app_route.dart';
import 'providers/projects_provider.dart';
import 'widgets/intro_section.dart';
import 'widgets/projects_section.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  @override
  void initState() {
    super.initState();
    // Schedule preloading after the first frame is rendered
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _preloadProjectImages();
    });
  }

  /// Preload the first 3 images from each project for better performance
  void _preloadProjectImages() {
    // Get projects from provider
    final projects = ref.read(projectsProvider);

    // Collect all images to preload
    final List<String> imagesToPreload = [];

    for (final project in projects) {
      if (project.imagePaths.isNotEmpty) {
        // Take first 3 images from each project
        imagesToPreload.addAll(project.imagePaths.take(3));
      }
    }

    // Preload all images asynchronously
    _preloadImagesAsync(imagesToPreload);
  }

  /// Preload images asynchronously to avoid blocking the UI
  Future<void> _preloadImagesAsync(List<String> imagePaths) async {
    for (final imagePath in imagePaths) {
      try {
        await precacheImage(AssetImage(imagePath), context);
        debugPrint('Successfully preloaded: $imagePath');
      } catch (error) {
        // Silently handle preload errors - images will load normally when displayed
        debugPrint('Failed to preload image: $imagePath - $error');
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: HomeBackground(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.only(top: 24, left: 24),
                constraints: BoxConstraints(
                  maxWidth: Breakpoints.desktop + 24 + 25,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    ElevatedButton(
                      onPressed: () => AppRoute.resume.push(context),
                      child: Text(HomePageText.seeMyResume),
                    ),
                    Expanded(child: SizedBox(width: 64)),
                  ],
                ),
              ),
              const IntroSection(),
              const ProjectsSection(),
              // Add bottom padding to prevent white space
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }
}
