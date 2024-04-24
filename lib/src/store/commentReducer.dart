


// comment
import '../model/CommentModel.dart';

class SetCommentAction {
  final CommentModel comment;
  SetCommentAction(this.comment);
}
class SetCommentListAction {
  final List<CommentModel> comments;
  SetCommentListAction(this.comments);
}