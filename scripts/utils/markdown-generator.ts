import { type PromptRecord, type SortedPromptData } from "./cms-client.js";
import { SUPPORTED_LANGUAGES, t } from "./i18n.js";

const REPO = "awesome-minimax-h3-prompts";
const REPO_URL = "https://github.com/AtlasCloudAI/awesome-minimax-h3-prompts";
const UTM = `?utm_source=github&utm_campaign=${REPO}`;
const PROMPT_SUBMISSION_URL = `${REPO_URL}/issues/new?template=prompt.yml`;

function buildCategoryAnchor(index: number): string {
  return `category-${index + 1}`;
}

function buildLocalePrefix(locale: string): string {
  return locale === "en" ? "" : `/${locale}`;
}

function buildPromptLibraryUrl(locale: string): string {
  const q = locale === "zh" ? "&locale=zh-CN" : locale === "zh-TW" ? "&locale=zh-TW" : "";
  return `https://www.atlascloud.ai/prompts-hub/minimax-h3-prompt${UTM}${q}`;
}

function buildAtlasHomepageUrl(): string {
  return `https://www.atlascloud.ai/${UTM}`;
}

function renderBadges(promptCount: number): string {
  return [
    "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)",
    `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
    `[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-minimax-h3-prompts?style=social)](${REPO_URL})`,
    `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](${REPO_URL}/pulls)`,
    `[![Prompts](https://img.shields.io/badge/prompts-${promptCount}%2B-blue.svg)](${REPO_URL})`,
  ].join("\n");
}

interface HomeCopy {
  languages: string;
  contents: string;
  howToUse: string;
  browse: string;
  adapt: string;
  generate: string;
  execution: string;
  executionIntro: string;
  executionMcp: string;
  executionCliRest: string;
  polling: string;
  modelDefaults: string;
  modelDefaultText: string;
  modelIntro: string;
  modelDescription: string;
  promptGuide: string;
  launchStatus: string;
  capabilityIntro: string;
  availability: string;
  referenceBinding: string;
  observableAction: string;
  spatialRelations: string;
  cameraCuts: string;
  visualStyle: string;
  audio: string;
  constraints: string;
  curation: string;
  curationText: string;
  officialCommunity: string;
  previewMeaning: string;
  faq: string;
  resources: string;
  development: string;
}

const homeCopyEn: HomeCopy = {
  languages: "Languages",
  contents: "Contents",
  howToUse: "How to use this repository",
  browse: "**Browse:** filter by category, open a real preview when available, and copy the prompt.",
  adapt: "**Adapt:** ask MiniMax H3 to rewrite a prompt for your subject, duration, aspect ratio, references, and continuity needs.",
  generate:
    "**Generate:** run the prompt on Atlas Cloud (text-to-video, image-to-video, or reference-to-video) and iterate on the shot list if a beat lands wrong.",
  execution: "Model and execution defaults",
  executionIntro:
    "Every prompt in this library is reproducible: the reference assets are linked next to it, and the model endpoints are the public Atlas Cloud ones.",
  executionMcp: "**Atlas MCP:** used when the user explicitly selects MCP and its generation tools are available.",
  executionCliRest: "**Atlas CLI / REST:** used for explicit terminal, script, CI, or batch workflows.",
  polling:
    "All asynchronous jobs are polled every 2 seconds using the same prediction ID. A timeout or delayed output is not permission to submit a duplicate paid generation.",
  modelDefaults: "Model defaults",
  modelDefaultText:
    "**Storyboard stills:** Seedream 5.0 Pro. **Executable video default:** MiniMax H3. **MiniMax H3:** only when the selected provider exposes the model and its actual limits.",
  modelIntro: "What is MiniMax H3?",
  modelDescription:
    "MiniMax H3 is ByteDance's next-generation multimodal video generation model, following MiniMax H3. It is designed for reference-driven video creation, longer narrative sequences, synchronized audio and video, and precise visual control.",
  promptGuide: "MiniMax H3 prompt guide",
  launchStatus:
    "**Launch status:** MiniMax H3 is expected to launch in August 2026. Atlas Cloud is one of the first official API launch partners for MiniMax H3.",
  capabilityIntro:
    "Published MiniMax H3 launch material describes up to 30-second generation, native 4K output, up to 50 multimodal references, and local region editing. Treat these as announced capabilities, not universal API parameters.",
  availability:
    "**Availability note:** reference limits, duration, resolution and editing controls differ per provider — check the model page before a billable run.",
  referenceBinding: "**Reference binding:** state what each image, video, or audio reference controls.",
  observableAction: "**Observable action:** describe visible events in temporal order, including reactions and state changes.",
  spatialRelations: "**Spatial relationships:** say where subjects, objects, and the camera are in relation to each other.",
  cameraCuts: "**Camera and cuts:** specify framing, movement, cut order, match actions, and occlusions only where they matter.",
  visualStyle: "**Visual style:** define lighting, palette, texture, atmosphere, and pace.",
  audio: "**Audio:** define dialogue, ambience, sound effects, or music when the selected model supports them.",
  constraints: "**Constraints:** preserve only the identities, product details, scene traits, and exclusions that are essential.",
  curation: "Curation and provenance",
  curationText:
    "Every prompt record keeps its category, source platform, author, source link, input references, and preview video when available. Prompt text remains unchanged during README generation.",
  officialCommunity:
    "The `official` and `community` labels describe where a prompt came from; they are not a guarantee that every prompt has been independently benchmarked across every provider or model version.",
  previewMeaning:
    "A preview demonstrates one observed output under its original setup. Results can change with model version, provider parameters, references, aspect ratio, seed, and moderation.",
  faq: "Frequently asked questions",
  resources: "Resources",
  development: "Repository development",
};

const homeCopyZh: HomeCopy = {
  ...homeCopyEn,
  languages: "语言",
  contents: "目录",
  howToUse: "如何使用这个仓库",
  browse: "**浏览：** 按分类查找提示词；有真实预览时先看预览，再复制提示词。",
  adapt: "**优化：** 让 MiniMax H3 根据主体、时长、画幅、参考素材和连续性要求改写提示词。",
  generate:
    "**生成：** 需要 Storyboard 时先生成并展示中间图，由 Agent 自行检查质量，然后通过所选 Atlas 通道提交图片或视频任务。",
  execution: "默认模型与执行方式",
  executionMcp: "**Atlas MCP：** 只有用户明确选择 MCP，且当前客户端暴露生成工具时才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用于用户明确选择的终端、脚本、CI 或批量任务。",
  polling:
    "所有异步任务都使用同一个 prediction ID 每 2 秒轮询一次。超时或暂时没有输出，不代表可以重复提交付费生成任务。",
  modelDefaults: "默认模型",
  modelDefaultText:
    "**Storyboard 静帧：** Seedream 5.0 Pro。**当前默认视频模型：** MiniMax H3。**MiniMax H3：** 只有所选服务商实际提供模型和明确参数限制时才使用。",
  modelIntro: "MiniMax H3 是什么？",
  modelDescription:
    "MiniMax H3 是字节跳动继 MiniMax H3 之后推出的下一代多模态视频生成模型，面向参考素材驱动的视频创作、更完整的叙事、音视频同步和精确的视觉控制。",
  promptGuide: "MiniMax H3 提示词指南",
  launchStatus:
    "**上线信息：** MiniMax H3 预计于 2026 年 8 月上线。Atlas Cloud 是 MiniMax H3 首批 API 上线的官方合作伙伴之一。",
  capabilityIntro:
    "公开的 MiniMax H3 发布资料描述了最长 30 秒、原生 4K、最多 50 个多模态参考素材和局部区域编辑等能力。这些是已发布的能力信息，不应直接视为所有 API 都支持的固定参数。",
  referenceBinding: "**参考绑定：** 明确每张图片、每段视频或音频分别控制什么。",
  observableAction: "**可观察动作：** 按时间顺序写清画面中真正发生的事件、反应和状态变化。",
  spatialRelations: "**空间关系：** 写清主体、物体与镜头之间的位置和相对关系。",
  cameraCuts: "**镜头与剪辑：** 只在必要时指定景别、运镜、切镜顺序、动作匹配和遮挡转场。",
  visualStyle: "**视觉风格：** 定义光线、色彩、材质、氛围和节奏。",
  audio: "**音频：** 当所选模型支持时，定义对白、环境声、音效或音乐。",
  constraints: "**约束：** 只保留真正重要的人物身份、产品细节、场景特征和禁止项。",
  curation: "收录标准与来源说明",
  curationText:
    "每条提示词都会保留分类、来源平台、作者、原始链接、输入参考素材，以及可用时的预览视频。README 生成过程不会改写提示词正文。",
  officialCommunity:
    "`official` 和 `community` 标签表示提示词的来源性质，并不代表每条提示词都已经在所有服务商和模型版本上完成独立测试。",
  previewMeaning:
    "预览视频代表原始配置下的一次真实输出。模型版本、服务商参数、参考素材、画幅、seed 和内容审核变化，都可能导致不同结果。",
  faq: "常见问题",
  resources: "相关资源",
  development: "仓库开发",
};

const homeCopyZhTw: HomeCopy = {
  ...homeCopyZh,
  languages: "語言",
  contents: "目錄",
  howToUse: "如何使用這個倉庫",
  browse: "**瀏覽：** 按分類尋找提示詞；有真實預覽時先看預覽，再複製提示詞。",
  adapt: "**最佳化：** 讓 MiniMax H3 根據主體、時長、畫幅、參考素材和連續性要求改寫提示詞。",
  generate:
    "**生成：** 需要 Storyboard 時先生成並展示中間圖，由 Agent 自行檢查品質，然後透過所選 Atlas 通道提交圖片或影片任務。",
  execution: "預設模型與執行方式",
  executionMcp: "**Atlas MCP：** 只有使用者明確選擇 MCP，且目前客戶端提供生成工具時才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用於使用者明確選擇的終端機、腳本、CI 或批次任務。",
  polling:
    "所有非同步任務都使用同一個 prediction ID 每 2 秒輪詢一次。逾時或暫時沒有輸出，不代表可以重複提交付費生成任務。",
  modelDefaults: "預設模型",
  modelDefaultText:
    "**Storyboard 靜幀：** Seedream 5.0 Pro。**目前預設影片模型：** MiniMax H3。**MiniMax H3：** 只有所選服務商實際提供模型和明確參數限制時才使用。",
  modelIntro: "MiniMax H3 是什麼？",
  modelDescription:
    "MiniMax H3 是字節跳動繼 MiniMax H3 之後推出的下一代多模態影片生成模型，面向參考素材驅動的影片創作、更完整的敘事、音影片同步和精確的視覺控制。",
  promptGuide: "MiniMax H3 提示詞指南",
  launchStatus:
    "**上線資訊：** MiniMax H3 預計於 2026 年 8 月上線。Atlas Cloud 是 MiniMax H3 首批 API 上線的官方合作夥伴之一。",
  capabilityIntro:
    "公開的 MiniMax H3 發布資料描述了最長 30 秒、原生 4K、最多 50 個多模態參考素材和局部區域編輯等能力。這些是已發布的能力資訊，不應直接視為所有 API 都支援的固定參數。",
  referenceBinding: "**參考綁定：** 明確每張圖片、每段影片或音訊分別控制什麼。",
  observableAction: "**可觀察動作：** 按時間順序寫清畫面中真正發生的事件、反應和狀態變化。",
  spatialRelations: "**空間關係：** 寫清主體、物體與鏡頭之間的位置和相對關係。",
  cameraCuts: "**鏡頭與剪輯：** 只在必要時指定景別、運鏡、切鏡順序、動作匹配和遮擋轉場。",
  visualStyle: "**視覺風格：** 定義光線、色彩、材質、氛圍和節奏。",
  audio: "**音訊：** 當所選模型支援時，定義對白、環境聲、音效或音樂。",
  constraints: "**約束：** 只保留真正重要的人物身分、產品細節、場景特徵和禁止項。",
  curation: "收錄標準與來源說明",
  curationText:
    "每條提示詞都會保留分類、來源平台、作者、原始連結、輸入參考素材，以及可用時的預覽影片。README 生成過程不會改寫提示詞正文。",
  officialCommunity:
    "`official` 和 `community` 標籤表示提示詞的來源性質，並不代表每條提示詞都已經在所有服務商和模型版本上完成獨立測試。",
  previewMeaning:
    "預覽影片代表原始設定下的一次真實輸出。模型版本、服務商參數、參考素材、畫幅、seed 和內容審核變化，都可能導致不同結果。",
  faq: "常見問題",
  resources: "相關資源",
  development: "倉庫開發",
};

function getHomeCopy(locale: string): HomeCopy {
  if (locale === "zh") return homeCopyZh;
  if (locale === "zh-TW") return homeCopyZhTw;
  return homeCopyEn;
}

function renderHeading(id: string, heading: string): string {
  return [`<a id="${id}"></a>`, "", `## ${heading}`, ""].join("\n");
}

function renderLanguageNavigation(currentLocale: string): string {
  const badges = SUPPORTED_LANGUAGES.map((lang) => {
    const isCurrent = lang.code === currentLocale;
    const color = isCurrent ? "brightgreen" : "lightgrey";
    const text = isCurrent ? t("current", currentLocale) : t("view", currentLocale);
    return `[![${lang.name}](https://img.shields.io/badge/${encodeURIComponent(lang.name)}-${encodeURIComponent(text)}-${color})](${REPO_URL}/blob/main/${lang.readmeFileName})`;
  }).join(" ");

  return `${badges}\n\n---\n`;
}

function renderQuickLinks(locale: string): string {
  const apiKeyUrl = `https://www.atlascloud.ai/console/api-keys${UTM}`;
  const labels =
    locale === "zh"
      ? ["浏览提示词", "提交提示词", "在 Atlas Cloud 生成", "获取 API Key"]
      : locale === "zh-TW"
        ? ["瀏覽提示詞", "提交提示詞", "在 Atlas Cloud 生成", "取得 API Key"]
        : ["Browse prompts", "Submit your prompt", "Generate with Atlas Cloud", "Get an API key"];

  return [
    `| [${labels[0]}](${buildPromptLibraryUrl(locale)}) | [${labels[1]}](${PROMPT_SUBMISSION_URL}) | [${labels[2]}](${buildAtlasHomepageUrl()}) | [${labels[3]}](${apiKeyUrl}) |`,
    "|---|---|---|---|",
    "",
    renderLanguageNavigation(locale),
  ].join("\n");
}


function renderHowToUse(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("how-to-use", `🚀 ${copy.howToUse}`),
    `1. ${copy.browse}`,
    `2. ${copy.adapt}`,
    `3. ${copy.generate}`,
    "",
  ].join("\n");
}

function renderExecution(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("model-and-execution-defaults", `⚙️ ${copy.execution}`),
    copy.executionIntro,
    "",
    `### ${copy.modelDefaults}`,
    "",
    copy.modelDefaultText,
    "",
    "- " + copy.executionMcp,
    "- " + copy.executionCliRest,
    "",
    copy.polling,
    "",
    `**[→ ${locale === "zh" ? "获取 Atlas Cloud API Key" : locale === "zh-TW" ? "取得 Atlas Cloud API Key" : "Get an Atlas Cloud API key"}](https://www.atlascloud.ai/console/api-keys${UTM})**`,
    "",
  ].join("\n");
}

function renderMoreTools(locale: string): string {
  const copy = getHomeCopy(locale);
  const websiteLabel =
    locale === "zh" ? "Atlas Cloud 官网" : locale === "zh-TW" ? "Atlas Cloud 官方網站" : "Atlas Cloud official website";
  return [
    renderHeading("resources", `🔗 ${copy.resources}`),
    "",
    `- [${websiteLabel}](${buildAtlasHomepageUrl()})`,
    `- [MiniMax H3 prompt gallery](${buildPromptLibraryUrl(locale)})`,
    `- [Atlas Cloud MiniMax H3 page](https://www.atlascloud.ai${buildLocalePrefix(locale)}/models/minimax/h3/text-to-video${UTM})`,
    "- [Atlas MCP Server](https://github.com/AtlasCloudAI/mcp-server)",
    "- [Atlas CLI](https://github.com/AtlasCloudAI/cli)",
    `- [Atlas Cloud model catalog](https://www.atlascloud.ai/models${UTM})`,
    "- [Discord](https://discord.gg/MWmMr4q9es)",
    "",
  ].join("\n");
}

function renderContents(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("contents", `📖 ${copy.contents}`),
    `- [🤔 ${copy.modelIntro}](#model-overview)`,
    `- [🧩 ${copy.promptGuide}](#prompt-guide)`,
    `- [🚀 ${copy.howToUse}](#how-to-use)`,
    `- [⚙️ ${copy.execution}](#model-and-execution-defaults)`,
    `- [🔎 ${copy.curation}](#curation-and-provenance)`,
    `- [📊 ${t("stats", locale)}](#statistics)`,
    `- [🏷️ ${t("browseByCategory", locale)}](#browse-by-category)`,
    `- [📋 ${t("allPrompts", locale)}](#all-prompts)`,
    `- [🔥 ${t("featuredPrompts", locale)}](#featured-prompts)`,
    `- [❓ ${copy.faq}](#faq)`,
    `- [🔗 ${copy.resources}](#resources)`,
    `- [📄 ${t("license", locale)}](#license)`,
    "",
  ].join("\n");
}

function renderPrompt(prompt: PromptRecord, index: number, locale: string): string {
  const lines = [
    `### No. ${index + 1}: ${prompt.title}`,
    "",
    `- **${t("category", locale)}:** \`${prompt.category}\``,
    `- **${t("source", locale)}:** \`${prompt.source_platform}\``,
    `- **${t("author", locale)}:** ${prompt.author_name}`,
    `- **${t("language", locale)}:** \`${prompt.language}\``,
  ];

  if (prompt.video_url) {
    lines.push(`- **${t("video", locale)}:** [${t("view", locale)}](${prompt.video_url})`);
    lines.push("");
    lines.push(`<video src="${prompt.video_url}" controls muted playsinline width="720"></video>`);
  }

  const referenceImages = prompt.reference_images ?? [];
  const referenceVideos = prompt.reference_videos ?? [];
  if (referenceImages.length > 0 || prompt.reference_video || referenceVideos.length > 0) {
    lines.push("");
    lines.push(`- **Inputs:**`);
    lines.push("");
    if (referenceImages.length > 0) {
      lines.push("<p>");
      for (const image of referenceImages) {
        lines.push(`  <img src="${image}" width="180" referrerpolicy="no-referrer">`);
      }
      lines.push("</p>");
    }
    if (prompt.reference_video) {
      lines.push(`<video src="${prompt.reference_video}" controls muted width="360"></video>`);
    }
    for (const video of referenceVideos) {
      lines.push(`<video src="${video}" controls muted width="360"></video>`);
    }
  }

  lines.push(
    "",
    `#### ${t("description", locale)}`,
    "",
    prompt.description,
    "",
    `#### ${t("prompt", locale)}`,
    "",
    "```text",
    prompt.prompt,
    "```",
    ""
  );

  return lines.join("\n");
}

function renderModelOverview(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("model-overview", `🤔 ${copy.modelIntro}`),
    copy.modelDescription,
    "",
    copy.launchStatus,
    "",
    copy.capabilityIntro,
    "",
    copy.availability,
    "",
  ].join("\n");
}

function renderPromptGuide(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("prompt-guide", `🧩 ${copy.promptGuide}`),
    "",
    "1. " + copy.referenceBinding,
    "2. " + copy.observableAction,
    "3. " + copy.spatialRelations,
    "4. " + copy.cameraCuts,
    "5. " + copy.visualStyle,
    "6. " + copy.audio,
    "7. " + copy.constraints,
    "",
  ].join("\n");
}

function renderCuration(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("curation-and-provenance", `🔎 ${copy.curation}`),
    copy.curationText,
    "",
    "- " + copy.officialCommunity,
    "- " + copy.previewMeaning,
    "",
  ].join("\n");
}

function renderFaq(locale: string): string {
  const copy = getHomeCopy(locale);
  const zh = locale === "zh" || locale === "zh-TW";
  const items = zh
    ? [
        ["这些提示词能直接用吗?", "可以。每条都是官方案例的原始提示词,复制后按需替换主体、场景和文字即可;参考素材链接就在旁边。"],
        ["需要上传参考素材吗?", "看路线:纯文生视频不需要;带 `@图片N` / `@视频N` / `@音频N` 的条目需要按提示词里写明的用途上传对应素材。"],
        ["在哪里运行?", "Atlas Cloud 的 MiniMax H3 三个端点:text-to-video、image-to-video、reference-to-video。"],
        ["提示词怎么自己写?", "按官方公式:参考素材说明 + 核心创意 + 画面过程说明,详见仓库内的提示词指南。"],
      ]
    : [
        ["Can I use these prompts as-is?", "Yes. Each one is the original prompt from the official showcase — copy it and swap the subject, scene and on-screen text. Reference assets are linked next to it."],
        ["Do I need to upload reference assets?", "Depends on the route: pure text-to-video needs none. Entries containing `@Image N` / `@Video N` / `@Audio N` expect the assets described in the prompt."],
        ["Where do I run them?", "The three MiniMax H3 endpoints on Atlas Cloud: text-to-video, image-to-video and reference-to-video."],
        ["How do I write my own?", "Follow the official formula: reference-asset notes + core idea + shot-by-shot description. See the prompting guide in this repo."],
      ];
  const lines = [renderHeading("faq", `❓ ${copy.faq}`)];
  for (const [question, answer] of items) {
    lines.push(`### ${question}`, "", answer, "");
  }
  return lines.join("\n");
}

export function generateMarkdown(data: SortedPromptData, locale: string): string {
  const now = new Date().toISOString().slice(0, 10);
  const copy = getHomeCopy(locale);
  const lines: string[] = [];
  const promptsByCategory = new Map<string, PromptRecord[]>();

  for (const prompt of data.all) {
    const categoryPrompts = promptsByCategory.get(prompt.category) || [];
    categoryPrompts.push(prompt);
    promptsByCategory.set(prompt.category, categoryPrompts);
  }

  lines.push(`# 🎬 ${t("title", locale)}`);
  lines.push("");
  lines.push(`> ${t("subtitle", locale)}`);
  lines.push("");
  lines.push(renderBadges(data.stats.total));
  lines.push("");
  lines.push(renderQuickLinks(locale));
  lines.push(renderContents(locale));
  lines.push(renderModelOverview(locale));
  lines.push(renderPromptGuide(locale));
  lines.push(renderHowToUse(locale));
  lines.push(renderExecution(locale));
  lines.push(renderCuration(locale));
  lines.push(renderHeading("statistics", `📊 ${t("stats", locale)}`));
  lines.push("");
  lines.push(`| ${t("metric", locale)} | ${t("count", locale)} |`);
  lines.push("|--------|-------|");
  lines.push(`| ${t("totalPrompts", locale)} | **${data.stats.total}** |`);
  lines.push(`| ${t("categories", locale)} | **${data.categoryCounts.length}** |`);
  lines.push(`| ${t("previewVideos", locale)} | **${data.stats.videos}** |`);
  lines.push(`| ${t("lastUpdated", locale)} | **${now}** |`);
  lines.push("");
  lines.push(renderHeading("browse-by-category", `🏷️ ${t("browseByCategory", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    lines.push(`- [\`${item.category}\`](#${anchor}): **${item.count}**`);
  });

  lines.push("");
  lines.push(renderHeading("all-prompts", `📋 ${t("allPrompts", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    const prompts = promptsByCategory.get(item.category) || [];
    lines.push(`<a id="${anchor}"></a>`);
    lines.push("");
    lines.push(`### ${item.category} (${prompts.length})`);
    lines.push("");
    prompts.forEach((prompt, promptIndex) => lines.push(renderPrompt(prompt, promptIndex, locale)));
  });

  lines.push(renderHeading("featured-prompts", `🔥 ${t("featuredPrompts", locale)}`));
  data.featured.forEach((prompt, index) => lines.push(renderPrompt(prompt, index, locale)));
  lines.push(renderFaq(locale));
  lines.push(`<details><summary>${copy.development}</summary>`);
  lines.push("");
  lines.push("```bash");
  lines.push("npm ci");
  lines.push("npm run generate");
  lines.push("npx tsc --noEmit");
  lines.push("```");
  lines.push("");
  lines.push("</details>");
  lines.push("");
  lines.push(renderMoreTools(locale));
  lines.push(renderHeading("license", `📄 ${t("license", locale)}`));
  lines.push("");
  lines.push("[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)");
  lines.push("");
  lines.push(`> ${t("copyright", locale)}`);
  lines.push("");
  lines.push(`> ${t("autoGenerated", locale)} ${now}.`);
  lines.push("");

  return lines.join("\n");
}
