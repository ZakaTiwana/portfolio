import 'package:flutter/material.dart';
import '../../constants/theme.dart';

class HomeBackground extends StatelessWidget {
  final Widget child;

  const HomeBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(gradient: backgroundGradient),
      child: child,
    );
  }
}
