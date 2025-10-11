import 'package:flutter/material.dart';
import 'color_interface.dart';

/// Concrete implementation of ColorSchemeInterface with neon green theme
class NeonGreenColorScheme implements ColorSchemeInterface {
  @override
  Color get primary => const Color(0xFF00FF41); // Neon green

  @override
  Color get background => const Color(0xFF0A0E0D); // Dark background

  @override
  Color get backgroundTint => const Color(0xFF0D1512); // Dark green tint

  @override
  Color get textSecondary => const Color(0xFFB0B0B0); // Light gray

  @override
  Color get textPrimary => const Color(0xFFFFFFFF);

  @override
  LinearGradient get backgroundGradient => const LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF0A0E0D), Color(0xFF0D1512)],
  );

  @override
  LinearGradient get borderGradient => LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primary, Colors.transparent, primary],
  );
}
