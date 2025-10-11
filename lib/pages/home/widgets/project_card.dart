import 'package:flutter/material.dart';
import 'package:portfolio_flutter_web/constants/breakpoints.dart';
import '../../../domain/models/project.dart';
import 'project_content.dart';
import 'project_image_scroll_view.dart';

class ProjectCard extends StatefulWidget {
  final Project project;
  final bool isImageLeft;

  const ProjectCard({
    super.key,
    required this.project,
    required this.isImageLeft,
  });

  @override
  State<ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<ProjectCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 24, horizontal: 0),
      padding: EdgeInsets.all(
        MediaQuery.of(context).size.width < Breakpoints.mobile
            ? 0
            : 24, // Minimal padding on mobile
      ),
      child: LayoutBuilder(
        builder: (context, constraints) {
          final hasImages = widget.project.imagePaths.isNotEmpty;

          if (constraints.maxWidth < Breakpoints.mobile) {
            // Mobile layout - stack vertically with full width images
            return Column(
              children: [
                ProjectContent(project: widget.project),
                if (hasImages) ...[
                  const SizedBox(height: 32),
                  // Use almost full width for mobile - minimal padding
                  SizedBox(
                    width: constraints.maxWidth, // Use full available width
                    child: ProjectImageScrollView(
                      imagePaths: widget.project.imagePaths,
                      width: constraints.maxWidth, // Full width
                      height:
                          constraints.maxWidth * 1.65, // Maintain aspect ratio
                    ),
                  ),
                ],
              ],
            );
          } else {
            // Desktop layout - alternating sides
            return Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (hasImages && widget.isImageLeft) ...[
                  ProjectImageScrollView(
                    imagePaths: widget.project.imagePaths,
                    width: 400.0,
                    height: 660.0,
                  ),
                  const SizedBox(width: 64),
                ],
                Expanded(child: ProjectContent(project: widget.project)),
                if (hasImages && !widget.isImageLeft) ...[
                  const SizedBox(width: 64),
                  ProjectImageScrollView(
                    imagePaths: widget.project.imagePaths,
                    width: 400.0,
                    height: 660.0,
                  ),
                ],
              ],
            );
          }
        },
      ),
    );
  }
}
