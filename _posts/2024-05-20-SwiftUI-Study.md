---
title:  "SwiftUI 学习笔记"
author: Dylan
tags: [ Study ]
image: assets/images/iOS_18/preview.jpeg
---
## TeXt Theme - Cover

![TeXt Theme](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/TeXt-home.jpg)


学习SwiftUI 参考Github [示例](https://github.com/Jinxiansen/SwiftUI)

## 基础控件

### Text文本
#### Text
Text 用来展示一行或多行的文本内容，效果等同于 UILabel，但更加优秀。 如果要创建 Text， 只需通过 Text("SwiftUI") 即可创建； 采用链式语法，也可以为文本添加多项属性，如字体、颜色、阴影、上左下右的间距等。
```Text
struct TextPage: View {
    var body: some View {
        Text("SwiftUI")
            .foregroundColor(.red)
            .font(.title)
            .fontWeight(.bold)
            .italic()
            .underline()
            .shadow(color: .orange, radius: 1, x: 0, y: 2)
    }
}
```
#### TextField
TextField 用来添加普通的输入框，一般常用作文本输入。
```TextField
struct TextFieldPage: View {
    @State private var username: String = ""
    @State private var password: String = ""
    var body: some View {
        VStack {
            HStack {
                Text("用户名:").foregroundStyle(.secondary)
                TextField("请输入用户名", text: $username, onEditingChanged: { _ in
                    print("onEditingChanged \(self.$username)") },
                          onCommit: { print("onCommit\(self.$username)")
                }).padding()
            }.padding(10)// 内边距
                .frame(height: 50, alignment: .center)
            
            HStack {
                Text("密    码: ").foregroundStyle(.secondary)
                SecureField("请输入密码", text: $password).padding()
            }.padding(10)
        }
        .offset(x:100, y: -100)
        .navigationTitle("TextField")
    }
}
```
#### SecureField
SecureField 一般作为密码输入，使用上和TextField并无差异
### Image 图片

#### Image
Image 控件用于展示图片。
```Image
struct ImageIconPage: View {
    let range = 0...6
    var body: some View {
        VStack{
            ForEach(range, id: \.self) { index in
                Image(systemName: "star.fill")
                    .resizable()
                    .frame(width: 30 * CGFloat(index), height: 30 * CGFloat(index), alignment: .center)
                    .foregroundColor(.yellow)
            }
        }
    }
}
```
#### WebImage
webImage 用于下载网络图片，使用的 URLSession下载成功后替换原有 Image；你也可以在 downloadWebImage 方法中使用 [Kingfisher](https://github.com/onevcat/Kingfisher) 。
```WebImage
struct WebImagePage: View {
    @State private var uiImage: UIImage? = nil
    let placeholderImage = UIImage(systemName: "star.fill")!
    var body: some View {
        Image(uiImage: self.uiImage ?? placeholderImage)
            .resizable()
            .onAppear(perform: loadImage)
            .frame(width: 80,
                   height: 80,
                   alignment: .center)
            .onTapGesture {
                print("Tap ")
            }.navigationBarTitle(Text("WebImage"))
    }
    
    func loadImage() {
        guard let url = URL(string: "https://b0.bdstatic.com/4492935220f7efdae0356e133e9aeee8.jpg@h_1280") else {
            print("Invalid URL.")
            return
        }
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            if let data = data, let image = UIImage(data: data) {
                self.uiImage = image
            }else {
                print("error: \(String(describing: error))")
            }
        }.resume()
    }
}
```
#### Button
Button 用于响应点击事件。
```Button
struct ButtonPage: View {
    var body: some View {
        Button {
            print("Tap")
        } label: {
            Text("I'm a Button")
                .foregroundColor(.white)
                .padding()
                .background(Color.blue)
                .cornerRadius(10)
        }
    }
}
```
