//
//  appApp.swift
//  app
//
//  Created by 정승덕 on 2023/09/19.
//

import SwiftUI

@main
struct appApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
