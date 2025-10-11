import 'package:flutter/material.dart';
import '../../../constants/theme.dart';
import '../../../constants/text.dart';
import 'phone_frame.dart';

class ProjectImageScrollView extends StatefulWidget {
  final List<String> imagePaths;
  final double width;
  final double height;

  const ProjectImageScrollView({
    super.key,
    required this.imagePaths,
    required this.width,
    required this.height,
  });

  @override
  State<ProjectImageScrollView> createState() => _ProjectImageScrollViewState();
}

class _ProjectImageScrollViewState extends State<ProjectImageScrollView> {
  late PageController _pageController;
  int _currentPage = 0;

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  void _previousPage() {
    if (_currentPage > 0) {
      _pageController.previousPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    }
  }

  void _nextPage() {
    if (_currentPage < widget.imagePaths.length - 1) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final imageWidth = widget.width; // Account for padding

    // If no images, show a placeholder
    if (widget.imagePaths.isEmpty) {
      return SizedBox(
        height: widget.height,
        width: widget.width,
        child: Center(
          child: Container(
            width: imageWidth,
            height: widget.height,
            decoration: BoxDecoration(
              color: darkGreenTint.withOpacity(0.3),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: neonGreen.withOpacity(0.3), width: 2),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.code, size: 64, color: neonGreen.withOpacity(0.6)),
                const SizedBox(height: 16),
                Text(
                  'Code Project',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: neonGreen,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  HomePageText.viewOnGitHub,
                  style: Theme.of(
                    context,
                  ).textTheme.bodyMedium?.copyWith(color: lightGray),
                ),
              ],
            ),
          ),
        ),
      );
    }

    return SizedBox(
      height: widget.height,
      width: widget.width,
      child: Stack(
        children: [
          // PageView for images
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: PageView.builder(
              controller: _pageController,
              onPageChanged: (index) {
                setState(() {
                  _currentPage = index;
                });
              },
              itemCount: widget.imagePaths.length,
              itemBuilder: (context, index) {
                return Container(
                  margin: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 16,
                  ),
                  child: PhoneFrame(
                    imagePath: widget.imagePaths[index],
                    width: imageWidth,
                    height: widget.height,
                  ),
                );
              },
            ),
          ),
          // Left indicator
          if (_currentPage > 0)
            Positioned(
              left: 4,
              top: widget.height / 2 - 15,
              child: GestureDetector(
                onTap: _previousPage,
                child: Container(
                  width: 30,
                  height: 30,
                  decoration: BoxDecoration(
                    color: neonGreen.withOpacity(0.8),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: neonGreen.withOpacity(0.3),
                        blurRadius: 6,
                        spreadRadius: 1,
                      ),
                    ],
                  ),
                  child: const Icon(
                    Icons.chevron_left,
                    color: darkBackground,
                    size: 18,
                  ),
                ),
              ),
            ),
          // Right indicator
          if (_currentPage < widget.imagePaths.length - 1)
            Positioned(
              right: 4,
              top: widget.height / 2 - 15,
              child: GestureDetector(
                onTap: _nextPage,
                child: Container(
                  width: 30,
                  height: 30,
                  decoration: BoxDecoration(
                    color: neonGreen.withOpacity(0.8),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: neonGreen.withOpacity(0.3),
                        blurRadius: 6,
                        spreadRadius: 1,
                      ),
                    ],
                  ),
                  child: const Icon(
                    Icons.chevron_right,
                    color: darkBackground,
                    size: 18,
                  ),
                ),
              ),
            ),
          // Page indicators (dots)
          if (widget.imagePaths.length > 1)
            Positioned(
              bottom: 16,
              left: 0,
              right: 0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(
                  widget.imagePaths.length,
                  (index) => Container(
                    margin: const EdgeInsets.symmetric(horizontal: 4),
                    width: 8,
                    height: 8,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: _currentPage == index
                          ? neonGreen
                          : neonGreen.withOpacity(0.3),
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
