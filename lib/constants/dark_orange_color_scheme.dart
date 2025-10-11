import 'package:flutter/material.dart';
import 'color_interface.dart';

/// Concrete implementation of ColorSchemeInterface with dark orange theme
class DarkOrangeColorScheme implements ColorSchemeInterface {
  @override
  Color get primary => const Color(0xFFFF6B35); // Vibrant orange

  @override
  Color get background => const Color(0xFF1A0E0A); // Dark brown-orange

  @override
  Color get backgroundTint => const Color(0xFF20150D); // Slightly lighter brown-orange

  @override
  Color get textSecondary => const Color(0xFFDEB4B0); // Light orange-tinted gray

  @override
  Color get textPrimary => const Color(0xFFFFFFFF);

  @override
  LinearGradient get backgroundGradient => const LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF1A0E0A), Color(0xFF20150D), Color(0xFF2E1A0F)],
    stops: [0.0, 0.5, 1.0],
  );

  @override
  LinearGradient get borderGradient => LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primary, Colors.transparent, primary],
  );
}
