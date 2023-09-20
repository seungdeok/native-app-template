//
//  Webview.swift
//  app
//
//  Created by 정승덕 on 2023/09/20.
//

import SwiftUI
import WebKit

struct Webview: UIViewRepresentable {
    let url: URL
    func makeUIView(context: UIViewRepresentableContext<Webview>) -> WKWebView {
        let webview = WKWebView()
        let request = URLRequest(url: self.url, cachePolicy: .returnCacheDataElseLoad)
        webview.load(request)
        return webview
    }
    func updateUIView(_ webview: WKWebView, context: UIViewRepresentableContext<Webview>) {
        let request = URLRequest(url: self.url, cachePolicy: .returnCacheDataElseLoad)
        webview.load(request)
    }
}

struct Webview_Previews: PreviewProvider {
    static var previews: some View {
        Webview(url: URL(string: "https://native-app-template.vercel.app/react/home")!)
    }
}
