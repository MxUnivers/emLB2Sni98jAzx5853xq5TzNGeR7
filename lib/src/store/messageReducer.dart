


// message
import '../model/MessageModel.dart';

class SetMessageAction {
  final MessageModel message;
  SetMessageAction(this.message);
}
class SetMessageListAction {
  final List<MessageModel> messages;
  SetMessageListAction(this.messages);
}