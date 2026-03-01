# @peticipate/mbb-ui

> 毛幫幫 Design System — React component library

## 安裝

```bash
npm install @peticipate/mbb-ui
```

## 設定

### 1. 引入 CSS（在 `app/globals.css` 或 `layout.tsx`）

```css
/* app/globals.css */
@import "tailwindcss";
@import "@peticipate/mbb-ui/styles";
```

或在 Layout:
```tsx
import "@peticipate/mbb-ui/styles";
```

### 2. 使用元件

```tsx
import { MbbButton, MbbCard, MbbTag } from "@peticipate/mbb-ui";

export default function Page() {
  return (
    <MbbCard variant="default" hover="rise">
      <MbbTag variant="primary">寵物百科</MbbTag>
      <h3>認識毛幫幫</h3>
      <MbbButton variant="gradient-primary" size="lg">
        立即加入
      </MbbButton>
    </MbbCard>
  );
}
```

## 元件清單

### Core
| 元件 | 說明 |
|------|------|
| `MbbButton` | 按鈕（gradient-primary / outline-primary / secondary / pill） |
| `MbbCard` | 卡片（default / strong / solid / article / flat） |
| `MbbTag` | 標籤（primary / blue / gray / success / danger / warning + 生活類別） |
| `MbbSectionWrapper` | Section 容器（max-w-1200px） |
| `MbbWhitePanel` | 白色面板（表單、內容區塊） |
| `MbbHeroSection` | Hero 區塊（支援 PC/Pad/Phone 三版背景圖） |

### Forms
| 元件 | 說明 |
|------|------|
| `MbbFormInput` | 文字輸入（含 label / error / remind / valid 狀態） |
| `MbbFormSelect` | 下拉選單（支援搜尋） |
| `MbbFormCheckbox` | 勾選框 |
| `MbbFormRadio` | 單選框 |
| `MbbTextarea` | 多行文字（自動展開） |

### UI
| 元件 | 說明 |
|------|------|
| `MbbTabs` | 分頁（pill / underline 風格） |
| `MbbPagination` | 分頁器 |
| `MbbModal` | 對話框（md / lg / xl，手機可全螢幕） |
| `MbbBottomSheet` | 底部抽屜（手機用） |
| `MbbNoticeBlock` | 通知面板 |

### Layout
| 元件 | 說明 |
|------|------|
| `MbbNavbar` | 導覽列（桌面膠囊式 + 手機全螢幕選單） |
| `MbbFooter` | 頁尾 |
| `MbbLayout` | 全站框架（Navbar + Footer + Floating Buttons + AOS） |
| `MbbFloatingButtons` | 浮動按鈕（LINE + 加入） |
| `MbbLoadingSpinner` | 載入動畫（橙→藍漸變） |
| `MbbAosWrapper` | 捲動動畫容器（AOS 整合） |

### Hooks
| Hook | 說明 |
|------|------|
| `useIntersectionObserver` | 捲動進入視窗偵測（SVG 手繪動畫、漸入效果） |
| `useAutoExpand` | Textarea 自動展開 |

## 色彩系統

CSS 變數已包含完整色階：

| 色系 | 範圍 | 主色 |
|------|------|------|
| Orange | `--orange-25` ~ `--orange-600` | `--orange-300` (#ff9f61) |
| Blue | `--blue-50` ~ `--blue-600` | `--blue-200` (#83b3ff) |
| Neutral | `--neutral-50` ~ `--neutral-800` | — |
| Text | `--text-title` / `--text-content` / `--text-subcontent` / `--text-describe` | — |
| Semantic | `--success` / `--danger` / `--warning` / `--info` | — |

## CSS Utility Classes

自動包含在 CSS 中：
- `.rounded-pill` / `.rounded-card` / `.rounded-modal`
- `.shadow-card` / `.shadow-card-strong` / `.shadow-solid-orange`
- `.btn-gradient-primary` / `.btn-outline-primary` / `.btn-secondary`
- `.tag-primary` / `.tag-blue` / `.tag-gray`
- `.form-input-mbb` / `.checkbox-mbb` / `.radio-mbb`
- `.rise-effect` / `.img-hover-zoom`
- `.animate-fade-in` / `.animate-sketch-in` / `.animate-bounce-in`
- `.font-display-large` ~ `.font-head-small`（含 RWD）
- `.only-pc` / `.only-pad` / `.only-phone`（Responsive visibility）

## 動態效果

| 效果 | Class / Hook | 說明 |
|------|-------------|------|
| Rise Effect | `.rise-effect` / `.rise-effect-btn` | hover 上浮 |
| Image Zoom | `.img-hover-zoom` | hover 圖片放大 |
| SVG Sketch | `useIntersectionObserver` + `.title-doodle` | 手繪筆觸動畫 |
| AOS | `MbbAosWrapper` + `data-aos` 屬性 | 捲動進入動畫 |
| Flip Card | `.flip-card-container` | 3D 翻轉卡片 |
| Bounce In | `.animate-bounce-in` | 彈跳進入 |
| Fade In | `.animate-fade-in` | 淡入 |
| Spinner | `MbbLoadingSpinner` | 橙→藍漸變轉圈 |

## License

MIT © Peticipate
