import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio_flutter_web/router/app_route.dart';

import '../app.dart';
import '../pages/error/ui_error_page.dart';
import '../pages/home/ui_home_page.dart';
import '../pages/resume/ui_resume_page.dart';

final appRouterProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    navigatorKey: App.rootNavigatorKey,
    initialLocation: AppRoute.home.path,
    debugLogDiagnostics: false,
    redirect: (context, state) async {
      if (AppRoute.values.map((x) => x.path).contains(state.uri.path) ==
          false) {
        return AppRoute.home.path;
      }
      return null;
    },
    routes: [
      GoRoute(
        path: AppRoute.home.path,
        builder: (context, state) => const HomePage(),
      ),
      GoRoute(
        path: AppRoute.resume.path,
        builder: (context, state) => const ResumePage(),
      ),
      GoRoute(
        path: AppRoute.error.path,
        builder: (context, state) => const ErrorPage(),
      ),
    ],
    errorBuilder: (context, state) => const ErrorPage(),
  );
});
