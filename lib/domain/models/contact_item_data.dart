import 'package:flutter/material.dart';

class ContactItemData {
  final IconData icon;
  final String label;
  final String value;
  final String url;

  const ContactItemData({
    required this.icon,
    required this.label,
    required this.value,
    required this.url,
  });
}
