import "package:flutter/material.dart";

const Color primaryColor = Color(0xFF2967FF);
const Color grayColor = Color(0xFF8D8D8E);

const double defaultPadding = 16.0;

class Loading_skeleton {
  Widget AnnonceLoading() {
    return Row(
      children: [
        Skeleton(height: 120, width: 120),
        const SizedBox(width: defaultPadding),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Skeleton(width: 80),
              const SizedBox(height: defaultPadding / 2),
              Skeleton(),
              const SizedBox(height: defaultPadding / 2),
              Skeleton(),
              const SizedBox(height: defaultPadding / 2),
              Row(
                children: [
                  Expanded(
                    child: Skeleton(),
                  ),
                  SizedBox(width: defaultPadding),
                  Expanded(
                    child: Skeleton(width: 1),
                  ),
                ],
              )
            ],
          ),
        )
      ],
    );
  }

  Widget CategoryLoading() {
    return Skeleton(height: 50, width: 80);
  }
}

class Skeleton extends StatelessWidget {
  final double? height, width;
  const Skeleton({Key? key, this.height, this.width}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      width: width,
      padding: const EdgeInsets.all(defaultPadding / 2),
      decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.04),
          borderRadius:
              const BorderRadius.all(Radius.circular(defaultPadding))),
    );
  }
}
