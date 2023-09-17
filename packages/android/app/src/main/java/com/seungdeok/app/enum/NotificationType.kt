package com.seungdeok.app.enum

enum class NotificationType(val title: String, val id: Int) {
    NORMAL("NORMAL_NOTIFICATION", 0),
    EXPANDABLE("EXPANDABLE_NOTIFICATION", 1),
    CUSTOM("CUSTOM_NOTIFICATION", 3),
}