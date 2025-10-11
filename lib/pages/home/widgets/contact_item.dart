import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../constants/theme.dart';

class ContactItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final String url;

  const ContactItem({
    super.key,
    required this.icon,
    required this.label,
    required this.value,
    required this.url,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () async {
        if (await canLaunchUrl(Uri.parse(url))) {
          await launchUrl(Uri.parse(url));
        }
      },

      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: neonGreen, size: 16),
          const SizedBox(width: 8),
          SelectableText(
            value,
            style: Theme.of(
              context,
            ).textTheme.bodyMedium?.copyWith(color: lightGray, fontSize: 14),
          ),
        ],
      ),
    );
  }
}
