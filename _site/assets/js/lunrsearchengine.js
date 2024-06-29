
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/iOS_18_Investigation/",
    "title": "iOS 18 and Xcode 16 New Feature",
    "body": "2024/06/20 - New featureiOS 18 Preview: Release NoteiOS 18 Release Note: Xcode 16 Release Note: All Technologies Updates: What’s new in UIKitGeneral Automatic trait tracking: Leverage automatic trait usage tracking inside key update methods such as layoutSubviews(), eliminating the need for manual trait change registration and invalidation.    List improvements: Take advantage of enhancements to UIListContentConfiguration, which now automatically updates to match the style of the containing list by using the new UIListEnvironment trait from the trait collection, removing the need to instantiate a configuration for a specific list style yourself. func configurations(for location: FileLocation) -&gt;  (UIListContentConfiguration, UIBackgroundConfiguration) {  var contentConfiguration = UIListContentConfiguration. cell()  let backgroundConfiguration = UIBackgroundConfiguration. listCell()  contentConfiguration. text = location. title  contentConfiguration. image = location. thumbnailImage  return (contentConfiguration, backgroundConfiguration) }     UICalendarSelectionWeekOfYear: Select a specific week of the year in UICalendarView using the new UICalendarSelectionWeekOfYear selection option.    // Set the selection behavior. let selection = UICalendarSelectionWeekOfYear(delegate: self)calendarView. selectionBehavior = selection// Set the 11th week in the year 2024. selection. selectedWeekOfYear = DateComponents(  calendar: Calendar(identifier: . gregorian),  weekOfYear: 11,  yearForWeekOfYear: 2024)  Symbol animations: Add repeat, wiggle, breathe, and rotate effects to SF Symbols. VStack{    Spacer()    Image(systemName:  arrow. down. circle. fill )      . resizable()      . frame(width: 100, height: 100)      . symbolEffect(. wiggle)      . symbolRenderingMode(. hierarchical)        . foregroundColor(. purple)    Spacer()    Image(systemName:  figure. skiing. crosscountry. circle. fill )      . resizable()      . frame(width: 100, height: 100)      . symbolEffect(. breathe)      . symbolRenderingMode(. hierarchical)        . foregroundColor(. indigo)        Spacer()    Image(systemName:  figure. skiing. crosscountry. circle. fill )      . resizable()      . frame(width: 100, height: 100)      . symbolEffect(. rotate)      . symbolRenderingMode(. monochrome)      . foregroundColor(. indigo)    Spacer()  }   NavigationEvolve your document launch experience: Showcase your app and its unique identity with a new, customizable launch design for document-based apps. In UIKit, define launchOptions on your UIDocumentViewController.  SwiftUl     Recompile with the iOS 18 SDK   Add a DocumentGroupLaunchScene    UlKit     Make UIDocumentViewController the root   Apply customizations to the launchOptions      // Customize launch options.   launchOptions. title =  My Text Editor   launchOptions. background. backgroundColor = . darkGray    // Provide an action for the secondary action.   let templateAction = LaunchOptions. createDocumentAction(withIntent: . template)  templateAction. title =  Choose a Template   launchOptions. secondaryAction = templateAction  // Update the background  launchOptions. background. image = UIImage(named:  icon ) UITab and TabSidebar: Make your app’s navigation more immersive by adopting the new tab bar on iPad. If your app presents a rich hierarchy of tab items, set the mode to UITabBarController. Mode. tabSidebar to automatically switch between the tab bar and sidebar representations. In SwiftUI, use sidebarAdaptable.    UITabBarController adds a new label type UITab, which can set title, subtitle, image, badgeValue, etc.     UITabBarControllerDelegate adds multiple UITab-related delegate methods.   Demo   tabBarController. mode = . tabSidebar  // Assign an array of tabs.   tabBarController. tabs = [    UITab(title:  First ,       image: UIImage(systemName:  1. circle ),       identifier:  First Tab ) { _ in         // Return the view controller that the tab displays.         firstHostingController       },    UITab(title:  Second ,       image: UIImage(systemName:  2. circle ),       identifier:  Second Tab ) { _ in         // Return the view controller that the tab displays.         secondHostingController       },    UITab(title:  Three ,       image: UIImage(systemName:  3. circle ),       identifier:  Three Tab ) { _ in         // Return the view controller that the tab displays.         DocumentViewController()       },      ]iPhone and iPad demo  PreferredTransition: Transition between views in a way that feels fluid and consistent using a systemwide zoom transition. In UIKit, configure your view controller’s preferredTransition to zoom(options:sourceViewProvider:). In SwiftUI, use zoom(sourceID:in:).    Framework interoperabilityUlKit and SwiftUl interoperability: Use SwiftUI animations from AppKit and UIKit to create a consistent animation experience across apps that use multiple UI frameworks. In UIKit, use animate(with:changes:completion:). In AppKit, use animate(with:changes:completion:).  Animations // Animate changes to one or more views using the specified SwiftUI animation. Animations performed using this method can be smoothly retargeted while preserving velocity, just like animations in SwiftUI views. Task {  // Begins an animation to move the view to a new location.   UIView. animate(with: . spring(duration: 1. 0)) {    myView. center = CGPoint(x: 200, y: 200)  }  try await Task. sleep(for: . seconds(0. 5))    // Retargets the running animations to move the view to a different location.   UIView. animate(with: . spring) {    myView. center = CGPoint(x: 100, y: 400)  }}UIKit and UISwift Animations   Gesture recognizersswitch gesture. state {case . changed:  UIView. animate(. interactiveSpring) {    bead. center = gesture. translation  }case . ended:  UIView. animate(. spring) {    bead. center = endOfBracelet  }}Update link: With a UI update link, you can follow the progress of each UI update and express preferences about how those updates happen. Use a UI update link when you need precise and predictable control over the UI update process. UIUpdateLink similar to CADisplayLinkMore features  View tracking Low latency applications Better performance   let updateLink = UIUpdateLink(  view: view,  actionTarget: self,  selector: #selector(update))updateLink. requiresContinuousUpdates = trueupdateLink. isEnabled = true@objc func update(updateLink: UIUpdateLink,         updateInfo: UIUpdateInfo) {  view. center. y = sin(updateInfo. modelTime)    * 100 + view. bounds. midY}Sensory feedback: Use canvas feedback to indicate when a drawing event occurs, such as an object snapping to a guide or ruler. When using Apple Pencil Pro with a compatible iPad, this type of feedback can provide a tactile response.  Text improvements: Using new attributes for highlight   var attributes = [NSAttributedString. Key: Any]()  // Highlight style  attributes[. textHighlightStyle] =  NSAttributedString. TextHighlightStyle. default  // Highlight color scheme  attributes[. textHighlightColorScheme] =  NSAttributedString. TextHighlightColorScheme. purple What’s new in location authorization: Location Authorization 2. 0. Learn new recommendations and tips for getting the authorization you need, and new diagnostics that notify you when you’re not meeting authorization goals.    // Iterating liveUpdates to reflect current locationTask {  let updates = CLLocationUpdate. liveUpdates()  for try await update in updates {    if let loc = update. location {      updateLocationUI(location: loc)    }  }}Demo: AccessorySetupKit: Elevate your accessory setup experience with AccessorySetupKit. Display a beautiful pairing dialog with an image of your Bluetooth or Wi-Fi accessory — no trip to the Settings app required. Discover how to improve privacy by pairing only your app with an accessory. And learn how you can migrate existing accessories so they can be managed by AccessorySetupKit. Demo What’s new in Swift Swift updates Migrate your app to Swift 6Consume noncopyable types in swift Data-race safety: Swift 6 improves concurrency checking further, and the Swift team say it “removes many false-positive data-race warnings” that were present in 5. 10. It also introduces several targeted changes that will do wonders to make concurrency easier to adopt Swift 6 before and now display  Add Collection Operations on Noncontiguous Elements: Operate on noncontiguous ranges in collections using RangeSet and DiscontiguousSlice. struct ExamResult {  var student: String  var score: Int}// We can get a RangeSet containing the indices of all students who score 85% or higher like this    let results = [      ExamResult(student:  Eric Effiong , score: 95),      ExamResult(student:  Maeve Wiley , score: 70),      ExamResult(student:  Otis Milburn , score: 100)    ]// And if we wanted to get access to those students, we can use a new Collection subscript:    let topResults = results. indices { student in      student. score &gt;= 85    }        for result in results[topResults] {      print( \(result. student) scored \(result. score)% )    }Access-level modifiers on import declarations: Adds the ability to mark import declarations with access control modifiers, such as private import SomeLibrary. Upgrades for noncopyable types: In that code, the compiler enforces that message. read() can only ever be called once, because it consumes the object.    struct Message: ~Copyable {  var agent: String  private var message: String  init(agent: String, message: String) {    self. agent = agent    self. message = message  }  consuming func read() {    print( \(agent): \(message) )  }} func createMessage() {    let message = Message(agent:  Ethan Hunt , message:  You need to abseil down a skyscraper for some reason.  )    message. read()}Typed throws: enum IntegerParseError: Error { case nonDigitCharacter(String, index: String. Index)}func parse(string: String) throws -&gt; Int { for index in string. indices {  // . . .   throw IntegerParseError. nonDigitCharacter(string, index: index) }}do { let value = try parse(string:  1+234 )}catch let error as IntegerParseError { // . . . }catch {  // error is 'any Error'}func parse(string: String) throws -&gt; Int { //. . . }func parse(string: String) -&gt; Int { //. . . }Swift 6 func parse(string: String) throws(IntegerParseError) -&gt; Int { for index in string. indices {  // . . . throw IntegerParseError. nonDigitCharacter(string, index: index) }}do { let value = try parse(string:  1+234 )}catch {  // error is 'IntegerParseError'}func parse(string: String) throws(any Error) -&gt; Int { //. . . }func parse(string: String) throws(Never) -&gt; Int { //. . . }Meet Swift Testing: Introducing Swift Testing: a new package for testing your code using Swift. Explore the building blocks of its powerful new API, discover how it can be applied in common testing workflows, and learn how it relates to XCTest and open source Swift.   Swift ChartsThe plot thickens! Learn how to render beautiful charts representing math functions and extensive datasets using function and vectorized plots in your app. Whether you’re looking to display functions common in aerodynamics, magnetism, and higher order field theory, or create large interactive heat maps, Swift Charts has you covered.  Added new plot API variants at iOS 18  Charts demo  Source Demos    Chart {    LinePlot(x:  x , y:  y , t:  t , domain: -. pi . . . . pi) {        t in        let x = sqrt(2) * pow(sin(t), 3)        let y = cos(t) * (2 - cos(t) - pow(cos(t), 2))        return (x, y)      }      . foregroundStyle(. red)      . opacity(0. 8)    }    . chartXScale(domain: -3 . . . 3)    . chartYScale(domain: -4 . . . 2)    Chart {  AreaPlot(x:  x , yStart:  cos(x) , yEnd:  sin(x) ) { x in      (yStart: cos(x / 180 * . pi),      yEnd: sin(x / 180 * . pi))    }      . foregroundStyle(. orange)      . opacity(0. 8)  }  . chartXScale(domain: -315 . . . 315)  . chartYScale(domain: -5 . . . 5) What’s new in SwiftDataCreate a custom data store with SwiftData Track model changes with SwiftData history Combining Core Data’s proven persistence technology and Swift’s modern concurrency features, SwiftData enables you to add persistence to your app quickly, with minimal code and no external dependencies. Using modern language features like macros, SwiftData enables you to write code that is fast, efficient, and safe, enabling you to describe the entire model layer (or object graph) for your app. The framework handles storing the underlying model data, and optionally, syncing that data across multiple devices.  What’s new in SwiftUI SwiftUI essentials SwiftUI updatesWhat’s new in Xcode 16Support breakpoint resumption when downloading various Components.  Added Other Components of Predictive Code Completion Model, which is mainly used for code prediction functionAdded Swift Testing  Project navigator New File/Template menuNew File –&gt; New Empty File : The original functions are retainedNew File from Template. . . : Swift source files can be created quickly  Asset management  "
    }, {
    "id": 8,
    "url": "/SwiftUI-Study/",
    "title": "SwiftUI 学习笔记",
    "body": "2024/05/20 - 学习SwiftUI 参考Github 示例 基础控件: Text文本: Text: Text 用来展示一行或多行的文本内容，效果等同于 UILabel，但更加优秀。 如果要创建 Text， 只需通过 Text(“SwiftUI”) 即可创建； 采用链式语法，也可以为文本添加多项属性，如字体、颜色、阴影、上左下右的间距等。 struct TextPage: View {  var body: some View {    Text( SwiftUI )      . foregroundColor(. red)      . font(. title)      . fontWeight(. bold)      . italic()      . underline()      . shadow(color: . orange, radius: 1, x: 0, y: 2)  }}TextField: TextField 用来添加普通的输入框，一般常用作文本输入。 struct TextFieldPage: View {  @State private var username: String =     @State private var password: String =     var body: some View {    VStack {      HStack {        Text( 用户名: ). foregroundStyle(. secondary)        TextField( 请输入用户名 , text: $username, onEditingChanged: { _ in          print( onEditingChanged \(self. $username) ) },             onCommit: { print( onCommit\(self. $username) )        }). padding()      }. padding(10)// 内边距        . frame(height: 50, alignment: . center)            HStack {        Text( 密  码:  ). foregroundStyle(. secondary)        SecureField( 请输入密码 , text: $password). padding()      }. padding(10)    }    . offset(x:100, y: -100)    . navigationTitle( TextField )  }}SecureField: SecureField 一般作为密码输入，使用上和TextField并无差异 Image 图片: Image: Image 控件用于展示图片。 struct ImageIconPage: View {  let range = 0. . . 6  var body: some View {    VStack{      ForEach(range, id: \. self) { index in        Image(systemName:  star. fill )          . resizable()          . frame(width: 30 * CGFloat(index), height: 30 * CGFloat(index), alignment: . center)          . foregroundColor(. yellow)      }    }  }}WebImage: webImage 用于下载网络图片，使用的 URLSession下载成功后替换原有 Image；你也可以在 downloadWebImage 方法中使用 Kingfisher 。 struct WebImagePage: View {  @State private var uiImage: UIImage? = nil  let placeholderImage = UIImage(systemName:  star. fill )!  var body: some View {    Image(uiImage: self. uiImage ?? placeholderImage)      . resizable()      . onAppear(perform: loadImage)      . frame(width: 80,          height: 80,          alignment: . center)      . onTapGesture {        print( Tap  )      }. navigationBarTitle(Text( WebImage ))  }    func loadImage() {    guard let url = URL(string:  https://b0. bdstatic. com/4492935220f7efdae0356e133e9aeee8. jpg@h_1280 ) else {      print( Invalid URL.  )      return    }    URLSession. shared. dataTask(with: url) { (data, response, error) in      if let data = data, let image = UIImage(data: data) {        self. uiImage = image      }else {        print( error: \(String(describing: error)) )      }    }. resume()  }}Button: Button 用于响应点击事件。 struct ButtonPage: View {  var body: some View {    Button {      print( Tap )    } label: {      Text( I'm a Button )        . foregroundColor(. white)        . padding()        . background(Color. blue)        . cornerRadius(10)    }  }}"
    }, {
    "id": 9,
    "url": "/github-page-config/",
    "title": "Github Page 配置踩坑记录",
    "body": "2024/05/12 - 使用jekyll本地调试可以访问静态资源，但是上传至GitHub无法访问使用jekyll本地调试可以访问静态资源，但是上传至GitHub无法访问的问题 在参考网上教程配置完github page之后，将fork 的主题下载之后，启动本地服务器运行没问题.  但是在远端打开后CSS不渲染 可能的原因 _site文件被忽略,检查. gitignore文件: . gitignore文件有可能将_site文件添加为忽略文件，以至于git add . 等后续操作将该文件忽略，从而无法上传至远程仓库的问题。 如下，是我下载jekyll模板后，存在的内容，可以看到_site文件以及. sass-cache文件都被忽略了 解决： 检查远程仓库是否有_site文件，将. gitignore文件中的内容去掉，重新提交至远程仓库即可。 baseurl字段设置的有问题: 如果baseurl字段设置了值，jekyll本地生成的所以HTML文件中，其对静态资源的访问路径都会加上改值以作地址映射 上传至远程仓库后，其由于github的根目录没有关于/jekyll-theme-memoirs这个地址映射，所有使得有该映射地址的静态文件都无法访问 解决： 我目前还没找到可以为GitHub添加映射的方法，因此只能先将baseurl的值置空 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});