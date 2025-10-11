import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../constants/breakpoints.dart';
import 'contact_info_section.dart';
import 'profile_picture.dart';
import 'profile_info.dart';

class IntroSection extends ConsumerWidget {
  const IntroSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: Breakpoints.desktop),
          child: LayoutBuilder(
            builder: (context, constraints) {
              final isMobile = constraints.maxWidth < Breakpoints.mobile;
              if (isMobile) {
                // Mobile layout - single column
                return Column(
                  children: [
                    const ProfilePicture(),
                    const SizedBox(height: 32),
                    const ProfileInfo(alignment: CrossAxisAlignment.center),
                    const SizedBox(height: 40),
                    ContactInfoSection(isMobile: isMobile),
                  ],
                );
              } else {
                // Desktop layout - two columns
                return Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Left column - Profile info and contact
                    Expanded(
                      flex: 3,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const ProfileInfo(),
                          const SizedBox(height: 40),
                          ContactInfoSection(isMobile: isMobile),
                        ],
                      ),
                    ),
                    const SizedBox(width: 60),
                    // Right column - Profile picture
                    Expanded(
                      flex: 2,
                      child: const Center(child: ProfilePicture()),
                    ),
                  ],
                );
              }
            },
          ),
        ),
      ),
    );
  }
}
