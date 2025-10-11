import 'package:flutter/material.dart';
import 'package:portfolio_flutter_web/constants/dark_blue_color_scheme.dart';
import 'color_interface.dart';

// Color scheme instance
final ColorSchemeInterface colorScheme = DarkBlueColorScheme();

// Color palette - using interface
Color get primary => colorScheme.primary;
Color get background => colorScheme.background;
Color get backgroundTint => colorScheme.backgroundTint;
Color get textSecondary => colorScheme.textSecondary;
Color get textPrimary => colorScheme.textPrimary;

// Gradients - using interface
LinearGradient get backgroundGradient => colorScheme.backgroundGradient;
LinearGradient get borderGradient => colorScheme.borderGradient;

final ThemeData appTheme = ThemeData(
  useMaterial3: true,
  brightness: Brightness.dark,
  scaffoldBackgroundColor: background,
  colorScheme: ColorScheme.dark(
    primary: primary,
    secondary: backgroundTint,
    surface: background,
    onPrimary: background,
    onSecondary: primary,
    onSurface: textPrimary,
    outline: textSecondary,
  ),
  textTheme: TextTheme(
    displayLarge: TextStyle(
      fontSize: 48,
      fontWeight: FontWeight.bold,
      color: textPrimary,
    ),
    displayMedium: TextStyle(
      fontSize: 36,
      fontWeight: FontWeight.bold,
      color: textPrimary,
    ),
    headlineLarge: TextStyle(
      fontSize: 28,
      fontWeight: FontWeight.w600,
      color: primary,
    ),
    headlineMedium: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.w600,
      color: primary,
    ),
    bodyLarge: TextStyle(fontSize: 18, color: textSecondary),
    bodyMedium: TextStyle(fontSize: 16, color: textSecondary),
    bodySmall: TextStyle(fontSize: 14, color: textSecondary),
  ),

  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: primary,
      foregroundColor: background,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    ),
  ),

  iconTheme: IconThemeData(color: primary),
);
