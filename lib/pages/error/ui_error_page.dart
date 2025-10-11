import 'package:flutter/material.dart';

import '../../constants/text.dart';
import '../../router/app_route.dart';

class ErrorPage extends StatelessWidget {
  const ErrorPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: [
            Text(ErrorPageText.title),
            Text(ErrorPageText.message),
            TextButton(
              onPressed: () {
                AppRoute.home.go(context);
              },
              child: Text(ErrorPageText.buttonText),
            ),
          ],
        ),
      ),
    );
  }
}
