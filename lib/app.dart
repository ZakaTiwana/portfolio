import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio_flutter_web/router/router.dart';

import 'constants/text.dart';
import 'constants/theme.dart';

class App extends ConsumerStatefulWidget {
  static var rootNavigatorKey = GlobalKey<NavigatorState>();
  const App({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _AppState();
}

class _AppState extends ConsumerState<App> {
  @override
  void initState() {
    super.initState();
    App.rootNavigatorKey = GlobalKey<NavigatorState>();
  }

  @override
  Widget build(BuildContext context) {
    final router = ref.watch(appRouterProvider);
    return MaterialApp.router(
      routerConfig: router,
      debugShowCheckedModeBanner: false,
      title: appName,
      theme: appTheme,
      builder: (context, child) {
        return child ?? const SizedBox.shrink();
      },
    );
  }
}
