//
//  SettingView.swift
//  app
//
//  Created by 정승덕 on 2023/09/19.
//

import SwiftUI

struct SettingView: View {
    var body: some View {
        Webview(url: URL(string: "https://native-app-template.vercel.app/react/setting")!)
    }
}

struct SettingView_Previews: PreviewProvider {
    static var previews: some View {
        SettingView()
    }
}
