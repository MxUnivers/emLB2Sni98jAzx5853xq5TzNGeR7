import React from 'react'

const DasboardChatCandidatPage = () => {
  return (
    <div>
    <div class="breadcrumb-area">
                <h1>Messages</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href="dashboard.html">Home</a></li>
                    <li class="item"><a href="dashboard.html">Dashboard</a></li>
                    <li class="item">Messages</li>
                </ol>
            </div>
            

            
            
            <div class="chat-content-area">
                <div class="sidebar-left">
                    <div class="sidebar">
                        <div class="chat-sidebar-header d-flex align-items-center">
                            <div class="avatar me-3">
                                <img src="assets/images/dashboard/user1.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                            </div>
            
                            <form class="form-group position-relative mb-0">
                                <label><i class="ri-search-line"></i></label>
                                <input type="text" class="form-control" placeholder="Search here..."/>
                            </form>
                        </div>
            
                        <div class="sidebar-content d-flex chat-sidebar" data-simplebar>
                            <div class="chat-menu">
                                <label class="d-block list-group-label mt-0">Chats</label>
            
                                <ul class="list-group list-group-user list-unstyled mb-0">
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-busy"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Ellen Cranford</h6>
                                                <span class="d-block">Welcome to React...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user3.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-online"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Sherell Steckler</h6>
                                                <span class="d-block">React World...</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
            
                                <label class="d-block list-group-label">Contacts</label>
            
                                <ul class="list-group list-group-user list-unstyled mb-0">
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user4.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-away"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Mitsue Dove</h6>
                                                <span class="d-block">New Order..</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user5.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-offline"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Sasha Abele</h6>
                                                <span class="d-block">Lorem Ipsum...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user6.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-online"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Angeles Valls</h6>
                                                <span class="d-block">Lorem come...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user7.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-away"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Viki Hankins</h6>
                                                <span class="d-block">Web HTML...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user8.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-busy"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Shery Corlett</h6>
                                                <span class="d-block">HTML products...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user9.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-offline"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Jame Kolar</h6>
                                                <span class="d-block">Admin template...</span>
                                            </div>
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img src="assets/images/dashboard/user10.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                <span class="status-online"></span>
                                            </div>
            
                                            <div class="user-name">
                                                <h6>Damon Alvelo</h6>
                                                <span class="d-block">Web responsive...</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="content-right">
                    <div class="chat-area">
                        <div class="chat-list-wrapper">
                            <div class="chat-list">
                                <div class="chat-list-header d-flex align-items-center">
                                    <div class="header-left d-flex align-items-center">
                                        <div class="avatar me-3">
                                            <img src="assets/images/dashboard/user2.jpg" width="70" height="70" class="rounded-circle" alt="image"/>
                                            <span class="status-online"></span>
                                        </div>
                                        <h6 class="mb-0">Ellen Cranford</h6>
                                    </div>
            
                                    <div class="header-right text-end w-100">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <span class="favorite d-block">
                                                    <i class="ri-star-line"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <div class="dropdown">
                                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-menu-4-line"></i></button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item d-flex align-items-center" href="#"><i class="ri-pushpin-2-line"></i> Pin to Top</a>
                                                        <a class="dropdown-item d-flex align-items-center" href="#"><i class="ri-delete-bin-line"></i> Delete Chat</a>
                                                        <a class="dropdown-item d-flex align-items-center" href="#"><i class="ri-lock-line"></i> Block</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            
                                <div class="chat-container" data-simplebar>
                                    <div class="chat-content">
                                        <div class="chat">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user1.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>👋Hi​! I{"'"}m a Eeza. Let me know if you have any questions regarding our tool or set up a demo to learn more!</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat chat-left">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>Could you describe EnvyTheme in one sentence?</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user1.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p><a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a></p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="badge badge-pill badge-light my-3">Yesterday</div>
            
                                        <div class="chat chat-left">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>What makes you different from other learning platforms?</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user1.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>The best Innovative Chatbot and automations are here to expand.</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat chat-left">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>Great, Thank You!❤️</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user1.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>👋Hi​! I{"'"}m a Eeza.</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="chat chat-left">
                                            <div class="chat-avatar">
                                                <a routerLink="/profile" class="d-inline-block">
                                                    <img src="assets/images/dashboard/user2.jpg" width="50" height="50" class="rounded-circle" alt="image"/>
                                                </a>
                                            </div>
            
                                            <div class="chat-body">
                                                <div class="chat-message">
                                                    <p>What makes you different from other learning platforms?</p>
                                                    <span class="time d-block">7:45 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="chat-list-footer">
                                    <form class="d-flex align-items-center">
                                        <div class="btn-box d-flex align-items-center me-3">
                                            <button class="emoji-btn d-inline-block me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Emoji" type="button"><i class="ri-user-smile-line"></i></button>
            
                                            <button class="file-attachment-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="File Attachment" type="button"><i class="ri-attachment-2"></i></button>
                                        </div>
            
                                        <input type="text" class="form-control" placeholder="Type your message..."/>
            
                                        <button type="submit" class="send-btn d-inline-block">Send <i class="ri-send-plane-line"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DasboardChatCandidatPage;