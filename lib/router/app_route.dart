import 'package:flutter/material.dart' show BuildContext;
import 'package:go_router/go_router.dart';

export 'package:go_router/go_router.dart';

enum AppRoute {
  home(path: '/home'),
  error(path: '/error');

  const AppRoute({required this.path});

  final String path;

  void go(BuildContext context) {
    context.go(path);
  }

  void push(BuildContext context) {
    context.push(path);
  }
}
