import 'package:jouman_mobile_mobile/src/store/postReducer.dart';
import 'package:redux/redux.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';

import '../model/CandidatureModel.dart';
import '../model/CommentModel.dart';
import '../model/JobCategoryModel.dart';
import '../model/JobModel.dart';
import '../model/MessageModel.dart';
import '../model/PostModel.dart';
import 'candidatReducer.dart';
import 'candidatureReducer.dart';
import 'commentReducer.dart';
import 'jobCategoriesReducer.dart';
import 'jobReducer.dart';
import 'messageReducer.dart';


CandidatModel candidatReducer(CandidatModel state, dynamic action) {
  if (action is SetCandidatAction) {
    return action.candidat;
  }
  return state;
}
List<CandidatModel> candidatListReducer(List<CandidatModel> state, dynamic action) {
  if (action is SetCandidatListAction) {
    return action.candidats;
  }
  return state;
}

CandidatureModel candidatureReducer(CandidatureModel state, dynamic action) {
  if (action is SetCandidatureAction) {
    return action.candidature;
  }
  return state;
}
List<CandidatureModel> candidatureListReducer(List<CandidatureModel> state, dynamic action) {
  if (action is SetCandidatureListAction) {
    return action.candidatures;
  }
  return state;
}


// reducer pour les job
JobModel jobReducer(JobModel state, dynamic action) {
  if (action is SetJobAction) {
    return action.job;
  }
  return state;
}
List<JobModel> jobListReducer(List<JobModel> state, dynamic action) {
  if (action is SetJobListAction) {
    return action.jobs;
  }
  return state;
}

// reducer pour les categories de jobs
JobCategoryModel jobCategoryReducer(JobCategoryModel state, dynamic action) {
  if (action is SetJobCategoryAction) {
    return action.jobCategory;
  }
  return state;
}
List<JobCategoryModel> jobCategoryListReducer(List<JobCategoryModel> state, dynamic action) {
  if (action is SetJobCategoryListAction) {
    return action.jobCategorys;
  }
  return state;
}




// messages
MessageModel messageReducer(MessageModel state, dynamic action) {
  if (action is SetMessageAction) {
    return action.message;
  }
  return state;
}
List<MessageModel> messageListReducer(List<MessageModel> state, dynamic action) {
  if (action is SetMessageListAction) {
    return action.messages;
  }
  return state;
}


// Post articles
PostModel postReducer(PostModel state, dynamic action) {
  if (action is SetPostAction) {
    return action.post;
  }
  return state;
}
List<PostModel> postListReducer(List<PostModel> state, dynamic action) {
  if (action is SetPostListAction) {
    return action.posts;
  }
  return state;
}




//Commentaires
CommentModel commentReducer(CommentModel state, dynamic action) {
  if (action is SetCommentAction) {
    return action.comment;
  }
  return state;
}
List<CommentModel> commentListReducer(List<CommentModel> state, dynamic action) {
  if (action is SetCommentListAction) {
    return action.comments;
  }
  return state;
}





// action du les reducer
