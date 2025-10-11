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
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _preloadProjectImages();
    });
  }

  /// Preload the first 3 images from each project for better performance
  void _preloadProjectImages() {
    final projects = ref.read(projectsProvider);

    final List<String> imagesToPreload = [];

    for (final project in projects) {
      if (project.imagePaths.isNotEmpty) {
        // Take first 3 images from each project
        imagesToPreload.addAll(project.imagePaths.take(3));
      }
    }

    _preloadImagesAsync(imagesToPreload);
  }

  Future<void> _preloadImagesAsync(List<String> imagePaths) async {
    for (final imagePath in imagePaths) {
      precacheImage(AssetImage(imagePath), context)
          .then((value) {
            debugPrint('Successfully preloaded: $imagePath');
          })
          .catchError((error) {
            debugPrint('Failed to preload image: $imagePath - $error');
          });
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
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }
}
