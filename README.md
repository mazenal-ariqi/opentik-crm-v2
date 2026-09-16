# OpenTik CRM v2

واجهة أولية لنظام إدارة العملاء والمشاريع والصيانة لشركة OpenTik Smart Systems. التطبيق عربي (RTL)، متجاوب، ويعمل محليًا كخطوة أولى قبل إضافة API وقاعدة بيانات.

## التشغيل

```bash
npm install
npm run dev
```

## بناء الويب وAndroid

```bash
npm run build
npm run cap:sync
```

يتم إنشاء منصة Android وملف APK في GitHub Actions دون أي مفاتيح أو أسرار. توقيع الإنتاج سيُضاف مستقبلًا عبر GitHub Secrets فقط.

## البنية

- `src/data`: بيانات العرض الأولية
- `src/services`: طبقة التخزين والخدمات القابلة للاستبدال بـ API
- `src/styles`: الهوية البصرية والتصميم المتجاوب
- `.github/workflows`: بناء APK كـ artifact
