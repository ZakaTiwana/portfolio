import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:pdfrx/pdfrx.dart';
import 'package:url_strategy/url_strategy.dart';

import 'app.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  GoRouter.optionURLReflectsImperativeAPIs = true;
  // Set URL strategy to remove hash from URLs
  setPathUrlStrategy();

  pdfrxFlutterInitialize();
  runApp(ProviderScope(child: const App()));
}
