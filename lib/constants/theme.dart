import 'package:flutter/material.dart';

// Color palette
const Color neonGreen = Color(0xFF00FF41);
const Color darkBackground = Color(0xFF0A0E0D);
const Color darkGreenTint = Color(0xFF0D1512);
const Color lightGray = Color(0xFFB0B0B0);
const Color white = Color(0xFFFFFFFF);

// Gradients
const LinearGradient backgroundGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [darkBackground, darkGreenTint],
);

const LinearGradient borderGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [neonGreen, Colors.transparent, neonGreen],
);

final ThemeData appTheme = ThemeData(
  useMaterial3: true,
  brightness: Brightness.dark,
  colorScheme: const ColorScheme.dark(
    primary: neonGreen,
    secondary: neonGreen,
    surface: darkBackground,
    background: darkBackground,
    onPrimary: darkBackground,
    onSecondary: darkBackground,
    onSurface: white,
    onBackground: white,
  ),
  textTheme: const TextTheme(
    displayLarge: TextStyle(
      fontSize: 48,
      fontWeight: FontWeight.bold,
      color: white,
    ),
    displayMedium: TextStyle(
      fontSize: 36,
      fontWeight: FontWeight.bold,
      color: white,
    ),
    headlineLarge: TextStyle(
      fontSize: 28,
      fontWeight: FontWeight.w600,
      color: white,
    ),
    headlineMedium: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.w600,
      color: white,
    ),
    bodyLarge: TextStyle(fontSize: 18, color: lightGray),
    bodyMedium: TextStyle(fontSize: 16, color: lightGray),
    bodySmall: TextStyle(fontSize: 14, color: lightGray),
  ),
);
