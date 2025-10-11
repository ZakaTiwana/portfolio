import 'package:flutter/material.dart';

class PhoneFrame extends StatelessWidget {
  final String imagePath;
  final double? width;
  final double? height;

  const PhoneFrame({
    super.key,
    required this.imagePath,
    this.width,
    this.height,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width ?? 200,
      height: height ?? 300,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Image.asset(
          imagePath,
          fit: BoxFit.contain,
          errorBuilder: (context, error, stackTrace) {
            return Container(
              color: Theme.of(context).colorScheme.surface,
              child: const Icon(Icons.image_not_supported, size: 50),
            );
          },
        ),
      ),
    );
  }
}
