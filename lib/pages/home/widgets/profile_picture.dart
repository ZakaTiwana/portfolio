import 'package:flutter/material.dart';
import '../../../constants/theme.dart';
import '../../../gen/assets.gen.dart';

class ProfilePicture extends StatelessWidget {
  const ProfilePicture({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 300,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: neonGreen, width: 3),
        boxShadow: [
          BoxShadow(
            color: neonGreen.withOpacity(0.3),
            blurRadius: 20,
            spreadRadius: 5,
          ),
        ],
      ),
      child: ClipOval(
        child: Image.asset(
          Assets.profilePic.path,
          fit: BoxFit.cover,
          errorBuilder: (context, error, stackTrace) {
            return Container(
              color: darkBackground,
              child: const Icon(Icons.person, color: lightGray, size: 100),
            );
          },
        ),
      ),
    );
  }
}
