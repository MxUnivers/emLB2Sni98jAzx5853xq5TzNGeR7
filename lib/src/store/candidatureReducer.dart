


// candidat
import '../model/CandidatureModel.dart';

class SetCandidatureAction {
  final CandidatureModel candidature;
  SetCandidatureAction(this.candidature);
}
class SetCandidatureListAction {
  final List<CandidatureModel> candidatures;
  SetCandidatureListAction(this.candidatures);
}