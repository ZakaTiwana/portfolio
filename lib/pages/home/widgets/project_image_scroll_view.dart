import 'package:flutter/material.dart';
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
    final isMobile = MediaQuery.of(context).size.width < 768;

    return SizedBox(
      height: widget.height,
      width: widget.width,
      child: Stack(
        children: [
          // PageView for images
          Padding(
            padding: EdgeInsets.symmetric(
              horizontal: isMobile ? 4 : 40, // Minimal padding on mobile
            ),
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
                  margin: EdgeInsets.symmetric(
                    horizontal: isMobile ? 2 : 16, // Minimal margin on mobile
                    vertical: 16,
                  ),
                  child: PhoneFrame(
                    imagePath: widget.imagePaths[index],
                    width:
                        imageWidth -
                        (isMobile ? 8 : 64), // Account for minimal padding
                  ),
                );
              },
            ),
          ),
          // Left indicator
          if (_currentPage > 0)
            Positioned(
              left: isMobile ? 8 : 4,
              top: widget.height / 2 - 15,
              child: GestureDetector(
                onTap: _previousPage,
                child: Container(
                  width: 30,
                  height: 30,
                  decoration: BoxDecoration(
                    color: Theme.of(
                      context,
                    ).colorScheme.primary.withValues(alpha: 0.8),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Theme.of(
                          context,
                        ).colorScheme.primary.withValues(alpha: 0.3),
                        blurRadius: 6,
                        spreadRadius: 1,
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.chevron_left,
                    color: Theme.of(context).colorScheme.surface,
                    size: 18,
                  ),
                ),
              ),
            ),
          // Right indicator
          if (_currentPage < widget.imagePaths.length - 1)
            Positioned(
              right: isMobile ? 8 : 4,
              top: widget.height / 2 - 15,
              child: GestureDetector(
                onTap: _nextPage,
                child: Container(
                  width: 30,
                  height: 30,
                  decoration: BoxDecoration(
                    color: Theme.of(
                      context,
                    ).colorScheme.primary.withValues(alpha: 0.8),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Theme.of(
                          context,
                        ).colorScheme.primary.withValues(alpha: 0.3),
                        blurRadius: 6,
                        spreadRadius: 1,
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.chevron_right,
                    color: Theme.of(context).colorScheme.surface,
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
                          ? Theme.of(context).colorScheme.primary
                          : Theme.of(
                              context,
                            ).colorScheme.primary.withValues(alpha: 0.3),
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
