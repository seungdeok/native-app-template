//
//  HomeView.swift
//  app
//
//  Created by 정승덕 on 2023/09/19.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        Webview(url: URL(string: "https://native-app-template.vercel.app/react/home")!)
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
