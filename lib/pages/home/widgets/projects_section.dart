import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../constants/text.dart';
import '../../../constants/theme.dart';
import '../providers/projects_provider.dart';
import 'project_card.dart';

class ProjectsSection extends ConsumerWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final projects = ref.watch(projectsProvider);

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            children: [
              // Section Header
              Text(
                HomePageText.projectsTitle,
                style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  color: white,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 16),
              Text(
                HomePageText.projectsSubtitle,
                style: Theme.of(
                  context,
                ).textTheme.bodyLarge?.copyWith(color: lightGray),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 60),

              // Projects List
              ...projects.asMap().entries.map((entry) {
                final index = entry.key;
                final project = entry.value;
                return ProjectCard(project: project, isImageLeft: index.isOdd);
              }).toList(),
            ],
          ),
        ),
      ),
    );
  }
}
