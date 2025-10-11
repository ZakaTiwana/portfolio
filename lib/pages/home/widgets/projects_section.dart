import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../constants/breakpoints.dart';
import '../../../constants/text.dart';
import '../providers/projects_provider.dart';
import 'project_card.dart';

class ProjectsSection extends ConsumerWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final projects = ref.watch(projectsProvider);

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: Breakpoints.desktop),
          child: Column(
            children: [
              // Section Header
              Text(
                HomePageText.projectsTitle,
                style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  color: Theme.of(context).colorScheme.onSurface,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 16),
              Text(
                HomePageText.projectsSubtitle,
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Theme.of(context).colorScheme.outline,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 60),

              // Projects List
              ...projects.asMap().entries.map((entry) {
                final index = entry.key;
                final project = entry.value;
                return ProjectCard(project: project, isImageLeft: index.isOdd);
              }),
            ],
          ),
        ),
      ),
    );
  }
}
