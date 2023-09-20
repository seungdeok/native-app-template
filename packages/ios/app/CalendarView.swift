//
//  CalendarView.swift
//  app
//
//  Created by 정승덕 on 2023/09/19.
//

import SwiftUI

struct CalendarView: View {
    var body: some View {
        Webview(url: URL(string: "https://native-app-template.vercel.app/react/calendar")!)
    }
}

struct CalendarView_Previews: PreviewProvider {
    static var previews: some View {
        CalendarView()
    }
}
