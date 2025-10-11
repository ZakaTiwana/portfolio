import 'package:flutter/material.dart';
import 'color_interface.dart';

/// Concrete implementation of ColorSchemeInterface with dark blue theme
class DarkBlueColorScheme implements ColorSchemeInterface {
  @override
  Color get primary => const Color(0xFF00BFFF); // Bright cyan blue

  @override
  Color get background => const Color(0xFF0A0E1A); // Dark navy blue

  @override
  Color get backgroundTint => const Color(0xFF0D1520); // Slightly lighter navy

  @override
  Color get textSecondary => const Color(0xFFB0C4DE); // Light steel blue

  @override
  Color get textPrimary => const Color(0xFFFFFFFF);

  @override
  LinearGradient get backgroundGradient => const LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF0A0E1A), Color(0xFF0D1520), Color(0xFF0F1A2E)],
    stops: [0.0, 0.5, 1.0],
  );

  @override
  LinearGradient get borderGradient => LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primary, Colors.transparent, primary],
  );
}
