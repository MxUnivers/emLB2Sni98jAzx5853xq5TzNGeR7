


// jobCategory
import '../model/JobCategoryModel.dart';

class SetJobCategoryAction {
  final JobCategoryModel jobCategory;
  SetJobCategoryAction(this.jobCategory);
}
class SetJobCategoryListAction {
  final List<JobCategoryModel> jobCategorys;
  SetJobCategoryListAction(this.jobCategorys);
}