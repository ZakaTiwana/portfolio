import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio_flutter_web/constants/breakpoints.dart';
import '../../../common/widgets/home_background.dart';
import '../../../constants/text.dart';
import '../../../router/app_route.dart';
import 'widgets/intro_section.dart';
import 'widgets/projects_section.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: HomeBackground(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.only(top: 24, left: 24),
                constraints: BoxConstraints(
                  maxWidth: Breakpoints.desktop + 24 + 25,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    ElevatedButton(
                      onPressed: () => AppRoute.resume.push(context),
                      child: Text(HomePageText.seeMyResume),
                    ),
                    Expanded(child: SizedBox(width: 64)),
                  ],
                ),
              ),
              const IntroSection(),
              const ProjectsSection(),
            ],
          ),
        ),
      ),
    );
  }
}
