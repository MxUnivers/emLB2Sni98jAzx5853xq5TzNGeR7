


// candidat
import '../model/CandidatModel.dart';

class SetCandidatAction {
  final CandidatModel candidat;
  SetCandidatAction(this.candidat);
}
class SetCandidatListAction {
  final List<CandidatModel> candidats;
  SetCandidatListAction(this.candidats);
}