import 'package:flutter/material.dart';
import '../../../util/string_formating_extension.dart';
import '../../../constants/text.dart';
import '../../../domain/models/contact_item_data.dart';
import 'contact_item.dart';

class ContactInfoSection extends StatelessWidget {
  final bool isMobile;

  const ContactInfoSection({super.key, required this.isMobile});

  static List<ContactItemData> get _contactItems => [
    ContactItemData(
      icon: Icons.email,
      label: HomePageText.emailLabel,
      value: HomePageText.email,
      url: 'mailto:${HomePageText.email}',
    ),
    ContactItemData(
      icon: Icons.phone,
      label: HomePageText.mobileLabel,
      value: HomePageText.mobile,
      url: 'https://wa.me/${HomePageText.mobile.whiteSpaceRemoved}',
    ),
    ContactItemData(
      icon: Icons.code,
      label: HomePageText.githubLabel,
      value: HomePageText.github,
      url: 'https://${HomePageText.github}',
    ),
    ContactItemData(
      icon: Icons.work,
      label: HomePageText.linkedinLabel,
      value: HomePageText.linkedin,
      url: 'https://${HomePageText.linkedin}',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: isMobile
              ? MainAxisAlignment.center
              : MainAxisAlignment.start,
          children: [
            Text(
              HomePageText.getInTouchTitle,
              textAlign: isMobile ? TextAlign.center : TextAlign.start,
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
        const SizedBox(height: 16),
        if (isMobile)
          // Mobile layout - Wrap
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 32),
            child: Wrap(
              spacing: 16,
              runSpacing: 12,
              children: _contactItems
                  .map(
                    (item) => ContactItem(
                      icon: item.icon,
                      label: item.label,
                      value: item.value,
                      url: item.url,
                    ),
                  )
                  .toList(),
            ),
          )
        else
          // Desktop layout - Column
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: _contactItems
                .expand(
                  (item) => [
                    ContactItem(
                      icon: item.icon,
                      label: item.label,
                      value: item.value,
                      url: item.url,
                    ),
                    const SizedBox(height: 12),
                  ],
                )
                .take(_contactItems.length * 2 - 1)
                .toList(),
          ),
      ],
    );
  }
}
