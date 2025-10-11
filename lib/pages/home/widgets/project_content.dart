import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../domain/models/project.dart';
import '../../../constants/theme.dart';
import '../../../constants/text.dart';

class ProjectContent extends StatelessWidget {
  final Project project;

  const ProjectContent({super.key, required this.project});

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 600),
      margin: const EdgeInsets.only(top: 64),
      alignment: Alignment.center,
      padding: const EdgeInsets.all(24) + EdgeInsets.only(bottom: 24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            darkGreenTint.withOpacity(0.8),
            darkBackground.withOpacity(0.9),
            neonGreen.withOpacity(0.05),
          ],
          stops: const [0.0, 0.8, 1.0],
        ),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: neonGreen.withOpacity(0.2), width: 1),
        boxShadow: [
          BoxShadow(
            color: neonGreen.withOpacity(0.1),
            blurRadius: 20,
            spreadRadius: 2,
            offset: const Offset(0, 8),
          ),
          BoxShadow(
            color: darkBackground.withOpacity(0.3),
            blurRadius: 10,
            spreadRadius: 1,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            project.name,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              color: neonGreen,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 16),
          Text(project.summary, style: Theme.of(context).textTheme.bodyLarge),
          const SizedBox(height: 20),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: project.technologies.map((tech) {
              return Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 12,
                  vertical: 6,
                ),
                decoration: BoxDecoration(
                  color: neonGreen.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(
                    color: neonGreen.withOpacity(0.3),
                    width: 1,
                  ),
                ),
                child: Text(
                  tech,
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: neonGreen,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              );
            }).toList(),
          ),
          if (project.githubUrl != null) ...[
            const SizedBox(height: 20),
            TextButton(
              onPressed: () {
                launchUrl(Uri.parse(project.githubUrl!));
              },
              child: Row(
                children: [
                  Icon(Icons.code, color: neonGreen, size: 20),
                  const SizedBox(width: 8),
                  Text(
                    HomePageText.viewOnGitHub,
                    style: Theme.of(
                      context,
                    ).textTheme.bodyMedium?.copyWith(color: neonGreen),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
