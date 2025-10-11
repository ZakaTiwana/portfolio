import 'package:flutter/material.dart';

/// Interface for defining color schemes
abstract class ColorSchemeInterface {
  Color get primary;
  Color get background;
  Color get backgroundTint;
  Color get textSecondary;
  Color get textPrimary;

  LinearGradient get backgroundGradient;
  LinearGradient get borderGradient;
}
