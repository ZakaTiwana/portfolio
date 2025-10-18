import 'package:flutter/material.dart';
import '../../../constants/text.dart';

class ProfileInfo extends StatelessWidget {
  final CrossAxisAlignment alignment;

  const ProfileInfo({super.key, this.alignment = CrossAxisAlignment.start});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignment,
      children: [
        // Name
        SelectableText(
          HomePageText.name,
          style: Theme.of(context).textTheme.displayMedium,
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
        const SizedBox(height: 16),
        // Title
        SelectableText(
          HomePageText.title,
          style: Theme.of(context).textTheme.headlineLarge,
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
        const SizedBox(height: 24),
        // Bio
        SelectableText(
          HomePageText.bio,
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(height: 1.6),
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
      ],
    );
  }
}
