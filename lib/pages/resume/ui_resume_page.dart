import 'package:flutter/material.dart';
import 'package:pdfrx/pdfrx.dart';

import '../../constants/theme.dart';
import '../../constants/text.dart';
import '../../gen/assets.gen.dart';
import '../../router/app_route.dart';
import '../../util/web_download_util.dart';

class ResumePage extends StatefulWidget {
  const ResumePage({super.key});

  @override
  State<ResumePage> createState() => _ResumePageState();
}

class _ResumePageState extends State<ResumePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.surface,
        elevation: 0,
        leading: IconButton(
          onPressed: () => AppRoute.home.go(context),
          icon: Icon(
            Icons.arrow_back,
            color: Theme.of(context).colorScheme.primary,
          ),
        ),
        centerTitle: false,
        title: Text(
          HomePageText.backToHome,
          style: Theme.of(context).textTheme.headlineSmall?.copyWith(
            color: Theme.of(context).colorScheme.primary,
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: ElevatedButton.icon(
              onPressed: _downloadResume,
              icon: Icon(
                Icons.download,
                color: Theme.of(context).colorScheme.surface,
              ),
              label: Text(
                HomePageText.downloadResume,
                style: TextStyle(color: Theme.of(context).colorScheme.surface),
              ),
            ),
          ),
        ],
      ),
      body: Container(
        decoration: BoxDecoration(gradient: backgroundGradient),
        child: Center(
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: 600),
            child: PdfViewer.asset(
              Assets.muhammadZakaullahResume,
              params: PdfViewerParams(
                backgroundColor: Theme.of(context).colorScheme.surface,
                errorBannerBuilder: (context, error, retry, dismiss) {
                  return Container(
                    padding: const EdgeInsets.all(16),
                    color: Theme.of(
                      context,
                    ).colorScheme.primary.withValues(alpha: 0.1),
                    child: Row(
                      children: [
                        Icon(
                          Icons.error,
                          color: Theme.of(context).colorScheme.primary,
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            'Error loading PDF: $error',
                            style: TextStyle(
                              color: Theme.of(context).colorScheme.outline,
                            ),
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _downloadResume() async {
    try {
      // Use the web download utility
      await WebDownloadUtil.downloadAsset(
        assetPath: Assets.muhammadZakaullahResume,
        fileName: 'Muhammad_Zakaullah_Resume.pdf',
        mimeType: 'application/pdf',
      );
    } catch (e) {
      // Show error message
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('${HomePageText.errorLoadingResume}: $e'),
            backgroundColor: Colors.red.shade900,
            duration: const Duration(seconds: 3),
            action: SnackBarAction(
              label: HomePageText.retry,
              textColor: Colors.white,
              onPressed: _downloadResume,
            ),
          ),
        );
      }
    }
  }
}
