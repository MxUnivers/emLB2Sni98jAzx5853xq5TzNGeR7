


// post
import '../model/PostModel.dart';

class SetPostAction {
  final PostModel post;
  SetPostAction(this.post);
}
class SetPostListAction {
  final List<PostModel> posts;
  SetPostListAction(this.posts);
}