import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../domain/models/project.dart';
import '../../../gen/assets.gen.dart';

final projectsProvider = Provider<List<Project>>((ref) {
  return [
    Project(
      name: 'DhaoAI - Mobile App',
      summary:
          'AI-powered mobile app connecting users with intelligent agents. Built with Flutter, supporting Android and iOS with clean architecture.',
      imagePaths: [
        Assets.projects.dhaoAIMobileApp.dark.ssIphone1Dark.path,
        Assets.projects.dhaoAIMobileApp.dark.ssIphone4Dark.path,
        Assets.projects.dhaoAIMobileApp.dark.ssIphone7Dark.path,
        Assets.projects.dhaoAIMobileApp.dark.ssIphone9Dark.path,
        Assets.projects.dhaoAIMobileApp.light.ssIphone1Light.path,
        Assets.projects.dhaoAIMobileApp.light.ssIphone4Light.path,
        Assets.projects.dhaoAIMobileApp.light.ssIphone7Light.path,
        Assets.projects.dhaoAIMobileApp.light.ssIphone9Light.path,
      ],
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture'],
    ),
    Project(
      name: 'LAAF',
      summary:
          'Hybrid Flutter app for foot health monitoring with insole connectivity. Features user/caregiver roles, appointment booking, and real-time data tracking.',
      imagePaths: [
        Assets.projects.laaf.light.a0Laaf02.path,
        Assets.projects.laaf.light.a0Laaf04.path,
        Assets.projects.laaf.light.a0Laaf061.path,
        Assets.projects.laaf.light.a0Laaf09.path,
        Assets.projects.laaf.dark.laafDark00.path,
        Assets.projects.laaf.dark.laafDark01.path,
        Assets.projects.laaf.dark.laafDark02.path,
        Assets.projects.laaf.dark.laafDark03.path,
      ],
      technologies: ['Flutter', 'Dart', 'Health Tech', 'IoT'],
    ),
    Project(
      name: 'MyVox',
      summary:
          'Multi-language reporting app for paralegals. Flutter-based solution supporting English and Urdu with case management features.',
      imagePaths: [
        Assets.projects.myVox.a01Home.path,
        Assets.projects.myVox.a02Settings.path,
        Assets.projects.myVox.a03CreateReport.path,
        Assets.projects.myVox.a04HomeUr.path,
        Assets.projects.myVox.a05SettingsUr.path,
        Assets.projects.myVox.a06CreateReportUr.path,
      ],
      technologies: ['Flutter', 'Dart', 'Localization', 'Legal Tech'],
    ),
    Project(
      name: 'Roomph',
      summary:
          'Hotel reservation app targeting Pakistan market. Native Swift implementation with seamless booking experience.',
      imagePaths: [
        Assets.projects.roomph.roomph1.path,
        Assets.projects.roomph.roomph2.path,
        Assets.projects.roomph.roomph3.path,
        Assets.projects.roomph.roomph4.path,
      ],
      technologies: ['Swift', 'iOS', 'Hotel Booking', 'Native'],
    ),
    Project(
      name: 'TapPay',
      summary:
          'NFC-based virtual payment proof-of-concept. Flutter app with native NFC integration for secure fund transfers.',
      imagePaths: [
        Assets.projects.tapPay.tapay1.path,
        Assets.projects.tapPay.tapay2.path,
        Assets.projects.tapPay.tapay3.path,
        Assets.projects.tapPay.tapay4.path,
      ],
      technologies: ['Flutter', 'NFC', 'Payment', 'Native Integration'],
    ),
    Project(
      name: 'NewImage',
      summary:
          'Fitness equipment companion app. Native Swift & Kotlin with BLE communication for real-time workout tracking.',
      imagePaths: [
        Assets.projects.newImage.newImage2.path,
        Assets.projects.newImage.newImage3.path,
        Assets.projects.newImage.newImage4.path,
        Assets.projects.newImage.newImage6.path,
        Assets.projects.newImage.newImage7.path,
        Assets.projects.newImage.newImage8.path,
        Assets.projects.newImage.newImage9.path,
      ],
      technologies: ['Swift', 'Kotlin', 'BLE', 'Fitness Tech'],
    ),
    Project(
      name: 'This Portfolio Website',
      summary:
          'Modern, responsive Flutter web portfolio showcasing mobile development work. Features dark theme, 3D card effects, and interactive project showcase.',
      imagePaths: [], // No images for this project
      technologies: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Web'],
      githubUrl: 'https://github.com/ZakaTiwana/portfolio',
    ),
    Project(
      name: 'Network Request Package',
      summary:
          'A Dart package for sending network requests in an organized manner using the http package. Features retry logic, progress tracking, and custom error handling.',
      imagePaths: [], // No images for this project
      technologies: ['Dart', 'HTTP', 'Package', 'Network', 'Retry Logic'],
      githubUrl: 'https://github.com/ZakaTiwana/network_request',
    ),
  ];
});
