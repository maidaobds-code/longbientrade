const navButtons = document.querySelectorAll("button[data-target]");
const sections = [...document.querySelectorAll("section[id]")];
const topButton = document.querySelector(".to-top");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const languageCurrent = document.querySelector(".language-current");
const languageButtons = document.querySelectorAll("[data-lang]");
const languageNames = {
  ja: "JA",
  en: "EN",
  vi: "VI",
};
const translations = {
  ja: {
    "LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly": "LONG BIEN TRADE., CORP | OEM 釣具組立",
    "01 / Company": "01 / 会社概要",
    "02 / Goals": "02 / 目標",
    "03 / Strategic Location": "03 / 戦略的拠点",
    "04 / Strategic Partner・韓国": "04 / 戦略的パートナー・韓国",
    "05 / 製品ラインナップ＆モデル": "05 / 製品ラインナップ＆モデル",
    "06 / Assembly Services": "06 / 組立サービス",
    "07 / DELLI RIG・確認済みのお客様の声": "07 / DELLI RIG・確認済みのお客様の声",
    "08 / OEM Process": "08 / OEMプロセス",
    "09 / 生産能力および労働力の強み": "09 / 生産能力および労働力の強み",
    "10 / Strengths": "10 / 戦略的強み",
    "11 / OEM Partnership": "11 / OEMパートナーシップ",
    "LET'S BUILD TOGETHER": "共に未来を築きましょう",
    "A prosperous, long-term partnership.": "繁栄する長期的なパートナーシップ。",
    "We look forward to working with you.": "皆様と共にビジネスができますことを心より楽しみにしております。",
    "Factory: Nghe An Province, Vietnam": "工場: ベトナム・ゲアン省",
    "Email: longbientrade@gmail.com": "メール: longbientrade@gmail.com",
    "Tel / WhatsApp: +84 986 393 518": "電話 / WhatsApp: +84 986 393 518",
    "WeChat: +84 986 393 518": "WeChat: +84 986 393 518",
    "LinkedIn: linkedin.com/in/longbientrade": "LinkedIn: linkedin.com/in/longbientrade",
    "Office: No. 4, Alley 95/86, Vu Xuan Thieu St., Phuc Loi Ward, Long Bien District, Hanoi, Vietnam": "事務所: No. 4, Alley 95/86, Vu Xuan Thieu St., Phuc Loi Ward, Long Bien District, Hanoi, Vietnam",
    "Line": "LINE",
    "Long Bien District, Hanoi": "ハノイ市ロンビエン区",
    "Vietnam": "ベトナム",
    "Authentic post-purchase reviews • Product-in-use proof • Careful assembly": "購入後の実レビュー • 使用中の製品証明 • 丁寧な組立",
    "DELLI RIG Lux": "DELLI RIG Lux",
    "DELLI RIG LUX 仕様": "DELLI RIG LUX 仕様",
    "× BB CUSTOM": "× BB CUSTOM",
    "5号エステルライン 60 cm": "5号エステルライン 60 cm",
    "5号ナイロン/モノライン": "5号ナイロン/モノライン",
    "オフセットフック 4/0": "オフセットフック 4/0",
  },
  en: {
    "会社概要": "Company",
    "拠点": "Locations",
    "韓国パートナー": "Korean Partner",
    "製品": "Products",
    "サービス": "Services",
    "品質証明": "Quality Proof",
    "生産能力": "Capacity",
    "お問い合わせ": "Contact",
    "グローバル貿易の架け橋となる": "Bridging global trade",
    "OEM 釣具組立・カスタムフック結び・輸出用梱包まで対応するベトナムの製造パートナー。": "A Vietnam manufacturing partner for OEM fishing tackle assembly, custom hook tying, and export packaging.",
    "商談する": "Start a discussion",
    "製品を見る": "View products",
    "20年": "20 years",
    "グローバル実績": "Global track record",
    "7-10日": "7-10 days",
    "注文から出荷まで": "Order to shipment",
    "98%+": "98%+",
    "OTIF目標": "OTIF target",
    "0.1%未満": "Under 0.1%",
    "不良率目標": "Defect-rate target",
    "200,000+": "200,000+",
    "月産拡張ポテンシャル": "Monthly expansion potential",
    "会社概要および目標": "Company Overview and Goals",
    "LONG BIENは2006年に創業し、国際人材・留学・労働サービスを展開。2024年、釣り用仕掛けとカスタムフック結びに特化した製造子会社を設立しました。": "Founded in 2006, LONG BIEN developed global staffing, study-abroad, and labor services. In 2024, the company established a manufacturing subsidiary focused on fishing rigs and custom hook tying.",
    "戦略的拠点": "Strategic Location",
    "組立サービス": "Assembly Services",
    "当社の戦略的目標": "Our Strategic Goals",
    "品質・効率": "Quality and Efficiency",
    "100%手動QC、不良率0.1%未満、材料廃棄率0.5%未満、ISO 9001品質システムによる標準化。": "100% manual QC, defect rate under 0.1%, material waste under 0.5%, and ISO 9001-based standardization.",
    "運用・能力": "Operations and Capacity",
    "7-10日のリードタイム、98%以上のOTIF、需要に応じた柔軟な生産拡張。": "7-10 day lead time, over 98% OTIF, and flexible production scaling based on demand.",
    "価格・コスト": "Pricing and Cost",
    "数量ベースのOEM価格設定、長期的な価格安定性、廃棄削減によるコスト最適化。": "Volume-based OEM pricing, long-term price stability, and cost optimization through waste reduction.",
    "商業・パートナー": "Commercial and Partnership",
    "NDA締結、100% C/O遵守、韓国・日本・ヨーロッパ市場への展開。": "NDA support, 100% C/O compliance, and expansion into Korea, Japan, and Europe.",
    "効率的な輸出のために構築": "Built for Efficient Export",
    "製造工場": "Manufacturing Factory",
    "豊富な熟練労働力と主要商業海港への近接性により、輸出ロジスティクスを効率化しています。": "A skilled workforce and proximity to major commercial seaports help streamline export logistics.",
    "工場面積: 600 m²": "Factory area: 600 m²",
    "代表事務所": "Representative Office",
    "商業およびパートナー様対応の拠点": "Commercial and partner support base",
    "主要港湾": "Major Ports",
    "グローバル市場": "Global Markets",
    "40年以上の歴史と技術力。韓国初の台湾特許保持者として、Delli Rig Gen 2を中心にOEM製品モデルを展開しています。": "Over 40 years of history and technical expertise. As Korea's first holder of a Taiwan patent in this field, the partner develops OEM models centered on Delli Rig Gen 2.",
    "種類のOEM製品モデル": "OEM product models",
    "ベストセラー": "Best seller",
    "注目モデル": "Featured model",
    "製品ラインナップ＆モデル": "Product Lineup and Models",
    "注目モデル 0620": "Featured Model 0620",
    "製品ライン": "Product line",
    "製品名": "Product name",
    "ラインタイプ": "Line type",
    "メインエステルライン長": "Main ester line length",
    "下部エステルライン部": "Lower ester line section",
    "モデル番号": "Model number",
    "特許番号": "Patent number",
    "組立地": "Assembly location",
    "バーコード": "Barcode",
    "ベトナムにて組立": "Assembled in Vietnam",
    "プレミアムモノラインリグ": "Premium Monoline Rig",
    "Luxシリーズは05LS / 05LOモデルに対応し、5号ナイロン/モノラインとオフセットフック4/0を採用します。": "The Lux series supports 05LS / 05LO models and uses No. 5 nylon/monoline with offset hook 4/0.",
    "ブランド": "Brand",
    "フックタイプ": "Hook type",
    "組立サービスの範囲": "Scope of Assembly Services",
    "精密手動組み立て": "Precision Manual Assembly",
    "ライン、ハリス、スイベル、フックを指定仕様通りに結び付け。": "Lines, leaders, swivels, and hooks are tied according to specified requirements.",
    "原材料の調達＆検証": "Raw Material Sourcing and Verification",
    "認証された信頼できるサプライヤーからの調達と入荷品質検査。": "Sourcing from certified reliable suppliers and incoming quality inspection.",
    "1点ごとの品質保証/品質管理(QA/QC)": "Unit-by-unit QA/QC",
    "すべてのユニットで結び目の完全性とラインの張力を検査。": "Inspecting knot integrity and line tension for every unit.",
    "輸出用梱包＆プライベートブランド": "Export Packaging and Private Brand",
    "リテール台紙、バーコード貼り付け、輸出用マスターカートン梱包。": "Retail cards, barcode labeling, and export master carton packaging.",
    "お客様からのフィードバック:": "Customer Feedback:",
    "「信頼の品質と職人技」": "\"Trusted Quality and Craftsmanship\"",
    "丁寧な梱包、完璧な組み立て、そして高い満足度を証明する実際の体験。": "Real customer experiences demonstrating careful packaging, perfect assembly, and high satisfaction.",
    "平均評価": "Average rating",
    "確認済みレビュー": "Verified reviews",
    "最高評価率": "Top rating rate",
    "顧客アクセス数": "Customer visits",
    "OEMパートナーシップ＆実行プロセス": "OEM Partnership and Execution Process",
    "注文頭金＆生産開始": "Deposit and production start",
    "精密組立＆100%品質管理": "Precision assembly and 100% QC",
    "梱包＆出荷": "Packing and shipment",
    "倉庫納品＆最終検査": "Warehouse delivery and final inspection",
    "最終決済": "Final payment",
    "原産地証明書(C/O)発行": "Certificate of Origin (C/O) issuance",
    "生産能力および労働力の強み": "Production Capacity and Workforce Strengths",
    "稼働規模": "Operating scale",
    "人員配置": "Staffing",
    "日次／月次生産量": "Daily / monthly output",
    "拡張後の稼働ライン": "Expanded operating line",
    "現在のライン最大出力": "Current line maximum output",
    "最大出力ポテンシャル": "Maximum output potential",
    "迅速な拡張性": "Fast scalability",
    "戦略的立地の強み": "Strategic location strength",
    "戦略的強み": "Strategic Strengths",
    "柔軟なシフト勤務、拡張可能な作業スペース、ゲアン省の豊富な労働力により生産量を拡大可能です。": "Production can be scaled through flexible shifts, expandable workspaces, and Nghe An Province's abundant workforce.",
    "競争力のある人件費で豊富かつ勤勉な手作業労働力にアクセスできます。": "Access to an abundant and diligent manual workforce at competitive labor costs.",
    "30-40%コスト削減": "30-40% cost reduction",
    "ゲアン省での運用により競争力のある人件費を実現。": "Operations in Nghe An Province enable competitive labor costs.",
    "カスタム施工": "Custom execution",
    "国際品質基準とクライアント固有仕様に対応。": "Supports international quality standards and client-specific requirements.",
    "迅速なスケーリング": "Fast scaling",
    "10種類のカスタムモデルと柔軟なシフト勤務。": "10 custom models and flexible shift operation.",
    "IP保護": "IP protection",
    "NDA締結によるデザインと仕様の保護。": "Designs and specifications are protected through NDA agreements.",
    "C/Oサポート": "C/O support",
    "全出荷に対して公式原産地証明書を支援。": "Supports official Certificates of Origin for all shipments.",
    "訓練された労働力": "Trained workforce",
    "若く適応力の高いゲアン省の人材を育成。": "Developing young and adaptable talent in Nghe An Province.",
    "30 - 32名の作業員": "30 - 32 workers",
    "&gt; 2,000 個 / 日（フル稼働時）": "> 2,000 units / day (full operation)",
    "約 60,000 個 / 月": "Approx. 60,000 units / month",
    "100名以上の作業員": "Over 100 workers",
    "&gt; 200,000 個 / 月": "> 200,000 units / month",
    "> 2,000 個 / 日（フル稼働時）": "> 2,000 units / day (full operation)",
    "> 200,000 個 / 月": "> 200,000 units / month",
    "長期的なOEM生産パートナーシップに向けて": "Toward Long-term OEM Production Partnerships",
    "弊社の主な強みは、競争力のある生産コスト、柔軟な生産体制、厳格な品質管理、そして少量の試験発注から大規模な量産まで幅広く対応できる生産能力にあります。": "Our main strengths are competitive production costs, flexible manufacturing, strict quality control, and capacity that supports everything from small trial orders to large-scale mass production.",
    "現在、弊社では海外OEMネットワークの拡大を進めており、長期的なOEM生産パートナーシップを構築できる企業様との協業を希望しております。": "We are currently expanding our overseas OEM network and hope to collaborate with companies seeking long-term OEM production partnerships.",
    "貴社が、釣り針、釣り仕掛け、その他関連する釣具製品の海外OEMパートナーまたは製造委託先をお探しでしたら、ぜひ弊社にご相談ください。": "If your company is looking for an overseas OEM partner or manufacturing contractor for fishing hooks, fishing rigs, or related tackle products, please contact us.",
    "特に、既存の設計、仕様・配合、または生産工程をお持ちの製品について、弊社では製品サンプル、見積書、生産能力およびOEM生産に関する詳細情報をご提供し、貴社のご検討・ご評価をサポートいたします。": "For products with existing designs, specifications, formulations, or production processes, we can provide samples, quotations, production capacity details, and OEM production information to support your review and evaluation.",
    "多言語対応窓口": "Multilingual Contact Desk",
    "弊社には、日本語・英語・中国語など、各言語に対応可能なスタッフが在籍しております。": "Our company has staff who can support multiple languages, including Japanese, English, and Chinese.",
    "日本市場とのご連絡、通訳、業務サポートなどにつきましても、内容に応じて適切な担当者が対応いたします。": "For communication with the Japanese market, interpretation, and business support, the appropriate staff member will assist according to your needs.",
    "ご不明な点やご相談がございましたら、どうぞお気軽にお問い合わせください。": "If you have any questions or would like to discuss anything, please feel free to contact us.",
    "携帯電話：": "Mobile phone:",
    "何卒よろしくお願い申し上げます。": "Thank you for your consideration.",
    "QRコードから追加": "Add via QR code",
    "LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly": "LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly",
    "OEM 釣具組立": "OEM Fishing Tackle Assembly",
    "01 / Company": "01 / Company",
    "02 / Goals": "02 / Goals",
    "03 / Strategic Location": "03 / Strategic Location",
    "04 / Strategic Partner・韓国": "04 / Strategic Partner・Korea",
    "05 / 製品ラインナップ＆モデル": "05 / Product Lineup & Models",
    "06 / Assembly Services": "06 / Assembly Services",
    "07 / DELLI RIG・確認済みのお客様の声": "07 / DELLI RIG・Verified Customer Reviews",
    "08 / OEM Process": "08 / OEM Process",
    "09 / 生産能力および労働力の強み": "09 / Production Capacity & Workforce Strengths",
    "10 / Strengths": "10 / Strengths",
    "11 / OEM Partnership": "11 / OEM Partnership",
    "LET'S BUILD TOGETHER": "LET'S BUILD TOGETHER",
    "A prosperous, long-term partnership.": "A prosperous, long-term partnership.",
    "We look forward to working with you.": "We look forward to working with you.",
    "Factory: Nghe An Province, Vietnam": "Factory: Nghe An Province, Vietnam",
    "Email: longbientrade@gmail.com": "Email: longbientrade@gmail.com",
    "Tel / WhatsApp: +84 986 393 518": "Tel / WhatsApp: +84 986 393 518",
    "WeChat: +84 986 393 518": "WeChat: +84 986 393 518",
    "LinkedIn: linkedin.com/in/longbientrade": "LinkedIn: linkedin.com/in/longbientrade",
    "Office: No. 4, Alley 95/86, Vu Xuan Thieu St., Phuc Loi Ward, Long Bien District, Hanoi, Vietnam": "Office: No. 4, Alley 95/86, Vu Xuan Thieu St., Phuc Loi Ward, Long Bien District, Hanoi, Vietnam",
    "Line": "LINE",
    "Long Bien District, Hanoi": "Long Bien District, Hanoi",
    "Vietnam": "Vietnam",
    "× BB CUSTOM": "× BB CUSTOM",
    "5号エステルライン 60 cm": "No. 5 Ester Line 60 cm",
    "5号ナイロン/モノライン": "No. 5 Nylon / Monoline",
    "オフセットフック 4/0": "Offset Hook 4/0",
  },
  vi: {
    "会社概要": "Công ty",
    "拠点": "Địa điểm",
    "韓国パートナー": "Đối tác Hàn Quốc",
    "製品": "Sản phẩm",
    "サービス": "Dịch vụ",
    "品質証明": "Chứng minh chất lượng",
    "生産能力": "Năng lực sản xuất",
    "お問い合わせ": "Liên hệ",
    "グローバル貿易の架け橋となる": "Cầu nối thương mại toàn cầu",
    "OEM 釣具組立・カスタムフック結び・輸出用梱包まで対応するベトナムの製造パートナー。": "Đối tác sản xuất tại Việt Nam cho lắp ráp đồ câu OEM, buộc lưỡi tùy chỉnh và đóng gói xuất khẩu.",
    "商談する": "Trao đổi hợp tác",
    "製品を見る": "Xem sản phẩm",
    "20年": "20 năm",
    "グローバル実績": "Kinh nghiệm toàn cầu",
    "7-10日": "7-10 ngày",
    "注文から出荷まで": "Từ đặt hàng đến xuất hàng",
    "98%+": "98%+",
    "OTIF目標": "Mục tiêu OTIF",
    "0.1%未満": "Dưới 0,1%",
    "不良率目標": "Mục tiêu tỷ lệ lỗi",
    "200,000+": "200.000+",
    "月産拡張ポテンシャル": "Khả năng mở rộng mỗi tháng",
    "会社概要および目標": "Tổng quan và mục tiêu công ty",
    "LONG BIENは2006年に創業し、国際人材・留学・労働サービスを展開。2024年、釣り用仕掛けとカスタムフック結びに特化した製造子会社を設立しました。": "LONG BIEN thành lập năm 2006, hoạt động trong lĩnh vực nhân lực quốc tế, tư vấn du học và dịch vụ lao động. Năm 2024, công ty thành lập đơn vị sản xuất chuyên về rig câu và buộc lưỡi tùy chỉnh.",
    "戦略的拠点": "Địa điểm chiến lược",
    "組立サービス": "Dịch vụ lắp ráp",
    "当社の戦略的目標": "Mục tiêu chiến lược",
    "品質・効率": "Chất lượng và hiệu quả",
    "100%手動QC、不良率0.1%未満、材料廃棄率0.5%未満、ISO 9001品質システムによる標準化。": "QC thủ công 100%, tỷ lệ lỗi dưới 0,1%, hao hụt vật liệu dưới 0,5% và chuẩn hóa theo hệ thống ISO 9001.",
    "運用・能力": "Vận hành và năng lực",
    "7-10日のリードタイム、98%以上のOTIF、需要に応じた柔軟な生産拡張。": "Lead time 7-10 ngày, OTIF trên 98% và mở rộng sản xuất linh hoạt theo nhu cầu.",
    "価格・コスト": "Giá và chi phí",
    "数量ベースのOEM価格設定、長期的な価格安定性、廃棄削減によるコスト最適化。": "Báo giá OEM theo số lượng, ổn định giá dài hạn và tối ưu chi phí nhờ giảm hao hụt.",
    "商業・パートナー": "Thương mại và đối tác",
    "NDA締結、100% C/O遵守、韓国・日本・ヨーロッパ市場への展開。": "Hỗ trợ NDA, tuân thủ 100% C/O và mở rộng sang Hàn Quốc, Nhật Bản, châu Âu.",
    "効率的な輸出のために構築": "Xây dựng để xuất khẩu hiệu quả",
    "製造工場": "Nhà máy sản xuất",
    "豊富な熟練労働力と主要商業海港への近接性により、輸出ロジスティクスを効率化しています。": "Nguồn lao động lành nghề và vị trí gần cảng thương mại chính giúp tối ưu logistics xuất khẩu.",
    "工場面積: 600 m²": "Diện tích nhà máy: 600 m²",
    "代表事務所": "Văn phòng đại diện",
    "商業およびパートナー様対応の拠点": "Đầu mối thương mại và hỗ trợ đối tác",
    "主要港湾": "Cảng chính",
    "グローバル市場": "Thị trường toàn cầu",
    "40年以上の歴史と技術力。韓国初の台湾特許保持者として、Delli Rig Gen 2を中心にOEM製品モデルを展開しています。": "Hơn 40 năm lịch sử và năng lực kỹ thuật. Đối tác phát triển các mẫu OEM xoay quanh Delli Rig Gen 2.",
    "種類のOEM製品モデル": "mẫu sản phẩm OEM",
    "ベストセラー": "Bán chạy nhất",
    "注目モデル": "Mẫu nổi bật",
    "製品ラインナップ＆モデル": "Dòng sản phẩm và mẫu",
    "注目モデル 0620": "Mẫu nổi bật 0620",
    "製品ライン": "Dòng sản phẩm",
    "製品名": "Tên sản phẩm",
    "ラインタイプ": "Loại dây",
    "メインエステルライン長": "Chiều dài dây ester chính",
    "下部エステルライン部": "Phần dây ester dưới",
    "モデル番号": "Mã mẫu",
    "特許番号": "Số bằng sáng chế",
    "組立地": "Nơi lắp ráp",
    "バーコード": "Mã vạch",
    "ベトナムにて組立": "Lắp ráp tại Việt Nam",
    "プレミアムモノラインリグ": "Rig monoline cao cấp",
    "Luxシリーズは05LS / 05LOモデルに対応し、5号ナイロン/モノラインとオフセットフック4/0を採用します。": "Dòng Lux hỗ trợ mẫu 05LS / 05LO, dùng nylon/monoline số 5 và offset hook 4/0.",
    "ブランド": "Thương hiệu",
    "フックタイプ": "Loại lưỡi",
    "組立サービスの範囲": "Phạm vi dịch vụ lắp ráp",
    "精密手動組み立て": "Lắp ráp thủ công chính xác",
    "ライン、ハリス、スイベル、フックを指定仕様通りに結び付け。": "Buộc dây, leader, swivel và hook theo đúng thông số chỉ định.",
    "原材料の調達＆検証": "Tìm nguồn và kiểm tra nguyên liệu",
    "認証された信頼できるサプライヤーからの調達と入荷品質検査。": "Nguồn cung từ nhà cung cấp đáng tin cậy và kiểm tra chất lượng đầu vào.",
    "1点ごとの品質保証/品質管理(QA/QC)": "QA/QC từng sản phẩm",
    "すべてのユニットで結び目の完全性とラインの張力を検査。": "Kiểm tra độ chắc nút buộc và độ căng dây trên từng sản phẩm.",
    "輸出用梱包＆プライベートブランド": "Đóng gói xuất khẩu và nhãn riêng",
    "リテール台紙、バーコード貼り付け、輸出用マスターカートン梱包。": "Gắn thẻ bán lẻ, dán mã vạch và đóng master carton xuất khẩu.",
    "お客様からのフィードバック:": "Phản hồi khách hàng:",
    "「信頼の品質と職人技」": "\"Chất lượng tin cậy và tay nghề thủ công\"",
    "丁寧な梱包、完璧な組み立て、そして高い満足度を証明する実際の体験。": "Trải nghiệm thực tế chứng minh đóng gói cẩn thận, lắp ráp hoàn hảo và mức hài lòng cao.",
    "平均評価": "Đánh giá trung bình",
    "確認済みレビュー": "Đánh giá xác thực",
    "最高評価率": "Tỷ lệ đánh giá cao nhất",
    "顧客アクセス数": "Lượt khách truy cập",
    "OEMパートナーシップ＆実行プロセス": "Quy trình hợp tác và triển khai OEM",
    "注文頭金＆生産開始": "Đặt cọc và bắt đầu sản xuất",
    "精密組立＆100%品質管理": "Lắp ráp chính xác và QC 100%",
    "梱包＆出荷": "Đóng gói và xuất hàng",
    "倉庫納品＆最終検査": "Giao kho và kiểm tra cuối",
    "最終決済": "Thanh toán cuối",
    "原産地証明書(C/O)発行": "Phát hành C/O",
    "生産能力および労働力の強み": "Năng lực sản xuất và lợi thế lao động",
    "稼働規模": "Quy mô vận hành",
    "人員配置": "Nhân sự",
    "日次／月次生産量": "Sản lượng ngày/tháng",
    "拡張後の稼働ライン": "Dây chuyền sau mở rộng",
    "現在のライン最大出力": "Công suất tối đa hiện tại",
    "最大出力ポテンシャル": "Tiềm năng công suất tối đa",
    "迅速な拡張性": "Mở rộng nhanh",
    "戦略的立地の強み": "Lợi thế vị trí chiến lược",
    "戦略的強み": "Thế mạnh chiến lược",
    "柔軟なシフト勤務、拡張可能な作業スペース、ゲアン省の豊富な労働力により生産量を拡大可能です。": "Có thể mở rộng sản lượng nhờ ca làm linh hoạt, không gian làm việc có thể mở rộng và nguồn lao động dồi dào tại Nghệ An.",
    "競争力のある人件費で豊富かつ勤勉な手作業労働力にアクセスできます。": "Tiếp cận nguồn lao động thủ công dồi dào, chăm chỉ với chi phí nhân công cạnh tranh.",
    "30-40%コスト削減": "Giảm 30-40% chi phí",
    "ゲアン省での運用により競争力のある人件費を実現。": "Vận hành tại Nghệ An giúp đạt chi phí nhân công cạnh tranh.",
    "カスタム施工": "Gia công tùy chỉnh",
    "国際品質基準とクライアント固有仕様に対応。": "Đáp ứng tiêu chuẩn chất lượng quốc tế và thông số riêng của khách hàng.",
    "迅速なスケーリング": "Mở rộng nhanh",
    "10種類のカスタムモデルと柔軟なシフト勤務。": "10 mẫu tùy chỉnh và ca làm việc linh hoạt.",
    "IP保護": "Bảo vệ IP",
    "NDA締結によるデザインと仕様の保護。": "Bảo vệ thiết kế và thông số bằng thỏa thuận NDA.",
    "C/Oサポート": "Hỗ trợ C/O",
    "全出荷に対して公式原産地証明書を支援。": "Hỗ trợ chứng nhận xuất xứ chính thức cho mọi lô hàng.",
    "訓練された労働力": "Lực lượng lao động được đào tạo",
    "若く適応力の高いゲアン省の人材を育成。": "Đào tạo nguồn nhân lực trẻ, linh hoạt tại Nghệ An.",
    "30 - 32名の作業員": "30 - 32 công nhân",
    "&gt; 2,000 個 / 日（フル稼働時）": "> 2.000 sản phẩm / ngày (khi vận hành đầy đủ)",
    "約 60,000 個 / 月": "Khoảng 60.000 sản phẩm / tháng",
    "100名以上の作業員": "Hơn 100 công nhân",
    "&gt; 200,000 個 / 月": "> 200.000 sản phẩm / tháng",
    "> 2,000 個 / 日（フル稼働時）": "> 2.000 sản phẩm / ngày (khi vận hành đầy đủ)",
    "> 200,000 個 / 月": "> 200.000 sản phẩm / tháng",
    "長期的なOEM生産パートナーシップに向けて": "Hướng tới hợp tác sản xuất OEM dài hạn",
    "弊社の主な強みは、競争力のある生産コスト、柔軟な生産体制、厳格な品質管理、そして少量の試験発注から大規模な量産まで幅広く対応できる生産能力にあります。": "Thế mạnh chính của chúng tôi là chi phí sản xuất cạnh tranh, hệ thống sản xuất linh hoạt, kiểm soát chất lượng nghiêm ngặt và năng lực đáp ứng từ đơn thử nghiệm nhỏ đến sản xuất quy mô lớn.",
    "現在、弊社では海外OEMネットワークの拡大を進めており、長期的なOEM生産パートナーシップを構築できる企業様との協業を希望しております。": "Chúng tôi đang mở rộng mạng lưới OEM quốc tế và mong muốn hợp tác với các doanh nghiệp có nhu cầu xây dựng quan hệ sản xuất OEM dài hạn.",
    "貴社が、釣り針、釣り仕掛け、その他関連する釣具製品の海外OEMパートナーまたは製造委託先をお探しでしたら、ぜひ弊社にご相談ください。": "Nếu quý công ty đang tìm đối tác OEM nước ngoài hoặc đơn vị gia công cho lưỡi câu, bộ rig câu và các sản phẩm đồ câu liên quan, vui lòng liên hệ với chúng tôi.",
    "特に、既存の設計、仕様・配合、または生産工程をお持ちの製品について、弊社では製品サンプル、見積書、生産能力およびOEM生産に関する詳細情報をご提供し、貴社のご検討・ご評価をサポートいたします。": "Đặc biệt với sản phẩm đã có thiết kế, thông số, công thức hoặc quy trình sản xuất, chúng tôi có thể cung cấp mẫu, báo giá, năng lực sản xuất và thông tin OEM chi tiết để hỗ trợ quý công ty đánh giá.",
    "多言語対応窓口": "Bộ phận hỗ trợ đa ngôn ngữ",
    "弊社には、日本語・英語・中国語など、各言語に対応可能なスタッフが在籍しております。": "Công ty chúng tôi có đội ngũ nhân viên có thể hỗ trợ nhiều ngôn ngữ như tiếng Nhật, tiếng Anh và tiếng Trung.",
    "日本市場とのご連絡、通訳、業務サポートなどにつきましても、内容に応じて適切な担当者が対応いたします。": "Đối với việc liên lạc với thị trường Nhật Bản, phiên dịch và hỗ trợ nghiệp vụ, nhân viên phù hợp sẽ phụ trách tùy theo nội dung công việc.",
    "ご不明な点やご相談がございましたら、どうぞお気軽にお問い合わせください。": "Nếu quý khách có thắc mắc hoặc cần trao đổi, xin đừng ngần ngại liên hệ với chúng tôi.",
    "携帯電話：": "Điện thoại:",
    "何卒よろしくお願い申し上げます。": "Rất mong được hợp tác.",
    "QRコードから追加": "Thêm bằng mã QR",
    "LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly": "LONG BIEN TRADE., CORP | Lắp ráp đồ câu OEM",
    "OEM 釣具組立": "Lắp ráp đồ câu OEM",
    "01 / Company": "01 / Công ty",
    "02 / Goals": "02 / Mục tiêu",
    "03 / Strategic Location": "03 / Địa điểm chiến lược",
    "04 / Strategic Partner・韓国": "04 / Đối tác chiến lược・Hàn Quốc",
    "05 / 製品ラインナップ＆モデル": "05 / Dòng sản phẩm & mẫu",
    "06 / Assembly Services": "06 / Dịch vụ lắp ráp",
    "07 / DELLI RIG・確認済みのお客様の声": "07 / DELLI RIG・Đánh giá khách hàng xác thực",
    "08 / OEM Process": "08 / Quy trình OEM",
    "09 / 生産能力および労働力の強み": "09 / Năng lực sản xuất & lao động",
    "10 / Strengths": "10 / Thế mạnh",
    "11 / OEM Partnership": "11 / Hợp tác OEM",
    "LET'S BUILD TOGETHER": "CÙNG XÂY DỰNG TƯƠNG LAI",
    "A prosperous, long-term partnership.": "Một quan hệ hợp tác lâu dài và thịnh vượng.",
    "We look forward to working with you.": "Chúng tôi mong được hợp tác cùng quý công ty.",
    "Factory: Nghe An Province, Vietnam": "Nhà máy: Tỉnh Nghệ An, Việt Nam",
    "Email: longbientrade@gmail.com": "Email: longbientrade@gmail.com",
    "Tel / WhatsApp: +84 986 393 518": "Tel / WhatsApp: +84 986 393 518",
    "WeChat: +84 986 393 518": "WeChat: +84 986 393 518",
    "LinkedIn: linkedin.com/in/longbientrade": "LinkedIn: linkedin.com/in/longbientrade",
    "Office: No. 4, Alley 95/86, Vu Xuan Thieu St., Phuc Loi Ward, Long Bien District, Hanoi, Vietnam": "Văn phòng: Số 4, ngõ 95/86, Vu Xuan Thieu, Phuc Loi, Long Bien, Hà Nội, Việt Nam",
    "Line": "LINE",
    "Long Bien District, Hanoi": "Quận Long Biên, Hà Nội",
    "Vietnam": "Việt Nam",
    "Authentic post-purchase reviews • Product-in-use proof • Careful assembly": "Đánh giá thật sau mua • Bằng chứng sử dụng sản phẩm • Lắp ráp cẩn thận",
    "× BB CUSTOM": "× BB CUSTOM",
    "5号エステルライン 60 cm": "Dây ester số 5 60 cm",
    "5号ナイロン/モノライン": "Nylon / monoline số 5",
    "オフセットフック 4/0": "Offset Hook 4/0",
  },
};
const translatableTextNodes = [];

function collectTextNodes() {
  if (translatableTextNodes.length) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest("script, style")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    translatableTextNodes.push({
      node,
      original: node.textContent,
      key: node.textContent.trim(),
    });
  }
}

function scrollToTarget(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => scrollToTarget(button.dataset.target));
});

topButton.addEventListener("click", () => {
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.target === entry.target.id);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
  topButton.classList.toggle("show", window.scrollY > 700);
});

function applyLanguage(lang) {
  const nextLang = languageNames[lang] ? lang : "ja";
  collectTextNodes();
  document.documentElement.lang = nextLang;
  document.title =
    translations[nextLang]?.["LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly"] ||
    "LONG BIEN TRADE., CORP | OEM Fishing Tackle Assembly";
  languageCurrent.textContent = languageNames[nextLang];
  localStorage.setItem("siteLanguage", nextLang);

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });

  translatableTextNodes.forEach((item) => {
    const translated = translations[nextLang]?.[item.key];
    item.node.textContent = translated || item.original;
  });

  languageCurrent.textContent = languageNames[nextLang];
}

if (languageToggle && languageMenu) {
  applyLanguage(localStorage.getItem("siteLanguage") || "ja");

  languageToggle.addEventListener("click", () => {
    const isOpen = !languageMenu.hidden;
    languageMenu.hidden = isOpen;
    languageToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      languageMenu.hidden = true;
      languageToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      languageMenu.hidden = true;
      languageToggle.setAttribute("aria-expanded", "false");
    }
  });
}
