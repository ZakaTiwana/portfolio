import 'package:flutter/material.dart';
import '../../../constants/text.dart';
import '../../../constants/theme.dart';

class ProfileInfo extends StatelessWidget {
  final CrossAxisAlignment alignment;

  const ProfileInfo({super.key, this.alignment = CrossAxisAlignment.start});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignment,
      children: [
        // Name
        Text(
          HomePageText.name,
          style: Theme.of(context).textTheme.displayMedium?.copyWith(
            color: white,
            fontWeight: FontWeight.bold,
          ),
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
        const SizedBox(height: 16),
        // Title
        Text(
          HomePageText.title,
          style: Theme.of(context).textTheme.headlineLarge?.copyWith(
            color: neonGreen,
            fontWeight: FontWeight.w600,
          ),
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
        const SizedBox(height: 24),
        // Bio
        Text(
          HomePageText.bio,
          style: Theme.of(
            context,
          ).textTheme.bodyLarge?.copyWith(color: lightGray, height: 1.6),
          textAlign: alignment == CrossAxisAlignment.center
              ? TextAlign.center
              : TextAlign.start,
        ),
      ],
    );
  }
}
