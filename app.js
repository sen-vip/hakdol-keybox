const STORAGE_KEY = "hakdolSchoolKeyboxV30";

const DEFAULT_INFO = {
  "school": [
    [
      "학교 메일",
      "school"
    ],
    [
      "사업자등록번호",
      "123-45-67890"
    ],
    [
      "학교 기관코드",
      "12312123"
    ],
    [
      "나이스 조직코드",
      "B100000000"
    ],
    [
      "특수목적 인증서(메일)",
      "123123"
    ],
    [
      "전자관인 인증서",
      "12312313"
    ],
    [
      "학교장터 인증서",
      "••••••••"
    ],
    [
      "가통서비스 ID",
      "school"
    ],
    [
      "가통서비스 PW",
      "••••••••"
    ],
    [
      "학교공유폴더 ID",
      "school"
    ],
    [
      "학교공유폴더 PW",
      "••••••••"
    ],
    [
      "와이파이 PW",
      "••••••••"
    ],
    [
      "쿨메신저 PW",
      "••••••••"
    ]
  ],
  "bank": [
    [
      "학교회계계좌",
      "000-00-00000"
    ],
    [
      "카드계좌",
      "••••••••"
    ],
    [
      "세외계좌",
      "••••••••"
    ],
    [
      "계좌PW",
      "••••"
    ],
    [
      "은행인증서(실장)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••"
    ],
    [
      "은행인증서(지출)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••"
    ],
    [
      "은행인증서(세입)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••"
    ],
    [
      "은행인증서(급여)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••••"
    ]
  ],
  "card": [
    [
      "BC카드 결제 PW",
      "••••"
    ],
    [
      "카드결제 인증서",
      "••••"
    ],
    [
      "기관카드 1",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 2",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 3",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 4",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 5",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 6",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 7",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 8",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 9",
      "••••-••••-••••-••••"
    ],
    [
      "기관카드 10",
      "••••-••••-••••-••••"
    ]
  ]
};

const DEFAULT_ACCOUNTS = [
  {
    "category": "기타",
    "site": "나라장터",
    "id": "개인인증서",
    "password": "개인인증서 비번",
    "memo": "G2B | 조달청",
    "url": "https://www.g2b.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교장터",
    "id": "-",
    "password": "••••••••",
    "memo": "S2B | 인증서: oooo",
    "url": "https://www.s2b.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "지마켓",
    "id": "school",
    "password": "school1234",
    "memo": "G마켓 | 새벽배송 불가",
    "url": "https://www.gmarket.co.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "11번가",
    "id": "school",
    "password": "school1234",
    "memo": "",
    "url": "https://www.11st.co.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "알라딘",
    "id": "-",
    "password": "••••••••",
    "memo": "",
    "url": "https://www.aladin.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "예스24",
    "id": "-",
    "password": "••••••••",
    "memo": "YES24",
    "url": "https://www.yes24.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "SSG닷컴",
    "id": "-",
    "password": "••••••••",
    "memo": "SSG.com, 에스에스지닷컴 | 새벽배송 불가(자동취소됨)",
    "url": "https://www.ssg.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "다이소몰",
    "id": "-",
    "password": "••••••••",
    "memo": "BIZ 로그인",
    "url": "https://www.daisomall.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "롯데마트",
    "id": "-",
    "password": "••••••••",
    "memo": "ZETTA(제타플렉스)",
    "url": "https://www.lotteon.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "에이블마켓",
    "id": "-",
    "password": "••••••••",
    "memo": "able market, 서울시립 장애인생산품판매시설, 중증장애인생산품",
    "url": "https://www.ablemarket.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "꿈드래쇼핑몰",
    "id": "-",
    "password": "••••••••",
    "memo": "중증장애인생산품",
    "url": "https://www.goods.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "티처빌",
    "id": "-",
    "password": "••••••••",
    "memo": "티처몰, 체더스",
    "url": "https://www.teacherville.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "오피스안",
    "id": "-",
    "password": "••••••••",
    "memo": "과학실 물품",
    "url": "https://www.officeahn.co.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "스마일몰",
    "id": "-",
    "password": "••••••••",
    "memo": "스마일보건 | 보건실 물품",
    "url": "https://www.smilebogun.org",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "HK마트",
    "id": "-",
    "password": "••••••••",
    "memo": "에이치케이마트 | 급식실 물품",
    "url": "https://www.hkmart.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "농협뱅킹",
    "id": "-",
    "password": "••••••••",
    "memo": "NH뱅킹",
    "url": "https://banking.nonghyup.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "홈택스",
    "id": "-",
    "password": "••••••••",
    "memo": "HomeTax | 인증서: oooo",
    "url": "https://www.hometax.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "비씨카드",
    "id": "-",
    "password": "••••••••",
    "memo": "BC카드",
    "url": "https://www.bccard.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "농협카드",
    "id": "school",
    "password": "school1234",
    "memo": "인증서: oooo",
    "url": "https://card.nonghyup.com",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "NeaT (급식조달)",
    "id": "school",
    "password": "school1234",
    "memo": "공공급식전자조달시스템 | 인증서: oooo",
    "url": "https://neat.at.or.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "금융결제원",
    "id": "-",
    "password": "••••••••",
    "memo": "CMS | 이용기관 로그인",
    "url": "https://www.cmsedi.or.kr/cms/auth/signin",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "온비드",
    "id": "-",
    "password": "••••••••",
    "memo": "인증서: oooo",
    "url": "https://www.onbid.co.kr/op/meminf/lgnmng/prtllgn/PrtlLgnController/main.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "공공구매정보망",
    "id": "-",
    "password": "••••••••",
    "memo": "SMPP, 공공구매종합정보망 | 직접생산 확인, 중소기업 확인",
    "url": "https://www.smpp.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "올바로시스템",
    "id": "-",
    "password": "••••••••",
    "memo": "폐기물 처리",
    "url": "https://www.allbaro.or.kr/index.jsp",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "한전",
    "id": "-",
    "password": "••••••••",
    "memo": "한전ON, 파워플래너 | 전기요금·전력사용현황 조회 / 고객번호: ",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "도시가스",
    "id": "-",
    "password": "••••••••",
    "memo": "",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "상하수도",
    "id": "-",
    "password": "••••••••",
    "memo": "관할수도사업소",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "승강기정보센터",
    "id": "-",
    "password": "••••••••",
    "memo": "승강기점검 확인",
    "url": "https://www.elevator.go.kr/opn/MainPage.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "전기안전 여기로",
    "id": "-",
    "password": "••••••••",
    "memo": "한국전기안전공사(KESCO) / 전기안전점검 검사 등",
    "url": "https://safety.kesco.or.kr/cyber/index.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "교육시설통합",
    "id": "-",
    "password": "개인인증서 사용",
    "memo": "KEIIS, 교육시설통합정보망",
    "url": "https://work.keiis.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "시설물통합",
    "id": "-",
    "password": "••••••••",
    "memo": "FMS, 시설물통합정보시스템",
    "url": "https://www.fms.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "교육시설공제",
    "id": "-",
    "password": "••••••••",
    "memo": "KOEIS | 매년 11월 정기 가입(한국교육시설안전원)",
    "url": "https://edu.koies.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교안전공제회",
    "id": "-",
    "password": "••••••••",
    "memo": "사고 접수, 학교안전사고보상지원시스템",
    "url": "https://www.schoolsafe.or.kr/school/login.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교재난상황관리",
    "id": "-",
    "password": "••••••••",
    "memo": "",
    "url": "https://disaster.schoolsafe.kr/login",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "중증장애인생산품우선구매관리시스템",
    "id": "-",
    "password": "••••••••",
    "memo": "의무구매 실적 집계용(부서 성과평가), 매년 1회 확인 처리",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "인증신제품",
    "id": "-",
    "password": "••••••••",
    "memo": "NEP | 구매 계획 제출, 매년 1월경 공문 처리 | 설치 프로그램",
    "url": "https://www.nepmark.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "에코스퀘어",
    "id": "-",
    "password": "••••••••",
    "memo": "녹색구매",
    "url": "https://ecosq.or.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 입학준비금",
    "id": "-",
    "password": "••••••••",
    "memo": "진학어플라이",
    "url": "https://sen.jinhakapply.com/PublicAdmin/Account/Login.aspx",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 목적사업비 정산시스템",
    "id": "-",
    "password": "••••••••",
    "memo": "",
    "url": "https://mokjeok.sen.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 산업안전보건",
    "id": "-",
    "password": "••••••••",
    "memo": "상,하반기 안전보건 의무이행 점검 및 관리감독자 평가 결과 제출",
    "url": "https://sen.maot.co.kr/login",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 서울시학교안전공제회",
    "id": "담당자 개인인증",
    "password": "",
    "memo": "여행자동행공제",
    "url": "https://www.ssia.or.kr",
    "favorite": false
  }
];

function normalizeAccountDefaults(accounts) {
  return (accounts || [])
    .filter(a => String(a.site || "").trim() && !["…", "..."].includes(String(a.site || "").trim()))
    .map(a => ({
      category: a.category || "기타",
      site: normalizeSiteName(a.site || ""),
      id: a.id || "",
      password: a.password || "",
      memo: a.memo || "",
      url: a.url || "",
      favorite: a.favorite === true
    }));
}

let state = { info: structuredClone(DEFAULT_INFO), accounts: normalizeAccountDefaults(structuredClone(DEFAULT_ACCOUNTS)) };
let pwMode = "plain";
let deleteMode = { info: {}, account: {} };
let draggedIndex = null;
let accountSearchTerm = "";

const NO_MASK_LABELS = ["학교 메일", "사업자등록번호", "학교 기관코드", "나이스 조직코드", "와이파이PW", "와이파이 PW"];
function shouldMaskByLabel(label) {
  const normalized = String(label || "").replace(/\s+/g, "").toLowerCase();
  return !NO_MASK_LABELS.some(x => String(x).replace(/\s+/g, "").toLowerCase() === normalized);
}
function maskPw(v) {
  if (!v) return "";
  const text = String(v);
  if (text.includes("개인인증서") || text.includes("별도") || text === "-") return text;
  return "••••••••";
}
function displayPw(v) { return pwMode === "mask" ? maskPw(String(v || "")) : String(v || ""); }
function displayInfoValue(label, value) {
  if (pwMode !== "mask" || !shouldMaskByLabel(label)) return String(value || "");
  return maskPw(String(value || ""));
}
function inputTypeForLabel(label) {
  return pwMode === "mask" && shouldMaskByLabel(label) ? "password" : "text";
}
function normalizeSiteName(name) {
  return String(name || "")
    .replace("중증장애인생산품 우선구매관리시스템(꿈드래)", "중증장애인생산품우선구매관리시스템")
    .replace("꿈드래(중증장애인 우선구매)", "중증장애인생산품우선구매관리시스템");
}
function esc(s) { return String(s ?? "").replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function showToast(msg) { const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
function persistSilent() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getCategories() { return [...new Set(state.accounts.map(a => a.category || '기타'))]; }

function normalizeSearchText(v) { return String(v || "").toLowerCase().replace(/\s+/g, ""); }
function accountMatchesSearch(item, term) {
  if (!term) return true;
  const haystack = normalizeSearchText([item.category, item.site, item.id, item.password, item.memo, item.url].join(" "));
  return haystack.includes(normalizeSearchText(term));
}
function isPersonalAccount(item) {
  const text = `${item.site || ""} ${item.id || ""} ${item.password || ""} ${item.memo || ""}`;
  return /개인|담당자|자신|본인|개별|개인인증서/.test(text);
}
function hasCopyableValue(v) {
  const text = String(v || "").trim();
  return !!text && text !== "-" && text !== "••••••••" && text !== "••••";
}
function getQuickAccounts() {
  return state.accounts
    .map((item, idx) => ({...item, idx}))
    .filter(item => item.favorite && (hasCopyableValue(item.id) || hasCopyableValue(item.password)));
}
function toggleFavorite(idx) {
  syncInputs();
  if (!state.accounts[idx]) return;
  state.accounts[idx].favorite = !state.accounts[idx].favorite;
  render();
  showToast(state.accounts[idx].favorite ? "빠른복사에 추가했어요." : "빠른복사에서 뺐어요.");
}
window.toggleFavorite = toggleFavorite;
async function copyText(value, label = "값") {
  const text = String(value || "");
  if (!text.trim()) return showToast("복사할 내용이 없어요.");
  try {
    await navigator.clipboard.writeText(text);
    showToast(`${label} 복사 완료`);
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(`${label} 복사 완료`);
  }
}
function copyAccountField(idx, field) {
  syncInputs();
  const item = state.accounts[idx];
  if (!item) return;
  copyText(item[field], field === "id" ? "아이디" : field === "password" ? "비밀번호" : "값");
}

function openAccountUrl(idx) {
  syncInputs();
  const item = state.accounts[idx];
  const raw = String(item?.url || "").trim();
  if (!raw) return showToast("등록된 URL이 없어요. 엑셀의 URL 칸에 입력해 주세요.");
  const url = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
window.openAccountUrl = openAccountUrl;


function badgeText(name) {
  const raw = String(name || "?").trim().replace(/^[^가-힣A-Za-z0-9]+/, "");
  if (!raw) return "?";
  let out = "";
  let units = 0;
  for (const ch of raw) {
    if (/\s/.test(ch) || ch === "(" || ch === "/") break;
    const isAscii = /^[A-Za-z0-9]$/.test(ch);
    const cost = isAscii ? 1 : 2;
    if (units + cost > 2) break;
    out += isAscii ? ch.toUpperCase() : ch;
    units += cost;
    if (units >= 2) break;
  }
  return out || raw[0] || "?";
}
function normalizeInfoSchema() {
  const rows = state.info.school || [];
  const next = [];
  rows.forEach(([label, value]) => {
    const name = String(label || "");
    const val = String(value || "");
    if ((name === "가통서비스" || name === "학교공유폴더") && val.includes("/")) {
      const [id, pw] = val.split("/");
      next.push([`${name} ID`, id || ""]);
      next.push([`${name} PW`, pw || ""]);
    } else {
      next.push([label, value]);
    }
  });
  state.info.school = next;
}

function renderInfoCards() {
  normalizeInfoSchema();
  const cards = [
    ["school", "학교 공통정보", state.info.school, "wide", "schoolInfo"],
    ["bank", "은행 계좌정보", state.info.bank, "half", "bankInfo"],
    ["card", "결제 수단", state.info.card, "half", "cardInfo"]
  ];

  const dividerMap = {
    school: new Set([4, 7, 11])
  };

  function renderInfoRows(key, rows, deleting) {
    const pieces = [];
    rows.forEach(([label, value], idx) => {
      if (dividerMap[key]?.has(idx)) pieces.push('<div class="info-divider" aria-hidden="true"></div>');
      pieces.push(`
        <div class="info-row editable-row ${deleting ? 'selecting' : ''}">
          ${deleting ? `<label class="select-cell no-print"><input type="checkbox" data-info-select="${esc(key)}" data-idx="${idx}" aria-label="삭제할 행 선택" /></label>` : ''}
          <input class="label-input" title="${esc(label)}" value="${esc(label)}" data-info-label-key="${esc(key)}" data-info-idx="${idx}" aria-label="항목명 입력" />
          <div class="copy-cell info-copy-cell">
            <input class="inline-input" title="${esc(displayInfoValue(label, value))}" type="${inputTypeForLabel(label)}" value="${esc(value)}" data-info-key="${esc(key)}" data-info-idx="${idx}" aria-label="${esc(label)} 값 입력" />
            <button class="copy-pill copy-icon-only no-print" onclick="copyText(document.querySelector('[data-info-key=${esc(key)}][data-info-idx=\\'${idx}\\']').value, '${esc(label)}')" type="button" title="복사하기" aria-label="${esc(label)} 복사">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M5 15V7a2 2 0 0 1 2-2h8"></path></svg>
            </button>
          </div>
        </div>
      `);
    });
    return pieces.join("");
  }

  document.getElementById("infoCards").innerHTML = cards.map(([key, title, rows, span, anchorId]) => {
    const deleting = !!deleteMode.info[key];
    const visualClass = key === "card" ? "info-pay" : `info-${key}`;
    return `
    <article id="${esc(anchorId)}" class="info-card ${visualClass} ${span} ${deleting ? 'delete-mode' : ''}">
      <div class="info-card-head no-print-control">
        <div>
          <h2>${esc(title)}</h2>
          <p class="info-sub">${rows.length}개 항목</p>
        </div>
        <div class="mini-actions no-print">
          <button class="small-btn add-inline" onclick="addInfoRow('${esc(key)}')">+ 행 추가</button>
          <button class="small-btn delete-mode-btn ${deleting ? 'active' : ''}" onclick="toggleInfoDelete('${esc(key)}')">- 행 삭제</button>
        </div>
      </div>
      <div class="info-grid ${key === 'school' ? 'school-grid' : ''}">
        ${renderInfoRows(key, rows, deleting)}
      </div>
    </article>`;
  }).join("");
}

function quickSiteLabel(name) {
  const text = String(name || "").trim();
  if (text.length <= 10) return text;
  const cut = text.slice(0, 7).replace(/[\s(（]+$/g, "");
  return `${cut}(...)`;
}

function renderQuickAccounts(filteredCount) {
  const el = document.getElementById("quickAccounts");
  if (!el) return;
  const quick = getQuickAccounts();
  const countEl = document.getElementById("quickCount");
  if (countEl) countEl.textContent = `${quick.length}개 항목`;
  el.innerHTML = quick.length ? quick.map(item => `
    <article class="quick-item">
      <button class="quick-star" onclick="toggleFavorite(${item.idx})" title="빠른복사에서 빼기" type="button">☆</button>

      <div class="site-label">
        <span class="site-badge">${esc(badgeText(item.site))}</span>
        <div><strong title="${esc(item.site)}">${esc(quickSiteLabel(item.site))}</strong></div>
      </div>

      <div class="quick-actions">
        <button class="copy-btn" onclick="copyAccountField(${item.idx}, 'id')">ID</button>
        <button class="copy-btn" onclick="copyAccountField(${item.idx}, 'password')">PW</button>
      </div>
    </article>
  `).join("") : `<div class="empty-mini">빠른복사로 보여줄 공용계정이 아직 없어요.</div>`;
}

function renderAccounts() {
  const filteredAccounts = state.accounts
    .map((item, idx) => ({...item, idx}))
    .filter(item => accountMatchesSearch(item, accountSearchTerm));

  document.getElementById("rowCount").textContent = accountSearchTerm
    ? `${filteredAccounts.length} / ${state.accounts.length}개 항목`
    : `${state.accounts.length}개 항목`;
  renderQuickAccounts(filteredAccounts.length);

  const deleting = !!deleteMode.account.__all__;
  const showMove = !accountSearchTerm && !deleting;
  const html = `
    <div class="flat-table ${deleting ? 'delete-mode' : ''}">
      <table>
        <colgroup>
          ${deleting ? '<col class="no-print" style="width:42px">' : ''}
          <col class="no-print" style="width:58px">
          <col style="width:38%"><col style="width:27%"><col style="width:27%">
          ${showMove ? '<col class="no-print" style="width:56px">' : ''}
        </colgroup>
        <thead><tr>${deleting ? '<th class="no-print"></th>' : ''}<th class="no-print"></th><th>사이트명</th><th>아이디</th><th>비밀번호</th>${showMove ? '<th class="no-print">이동</th>' : ''}</tr></thead>
        <tbody>
          ${filteredAccounts.map(item => `
            <tr ${showMove ? `draggable="true" ondragstart="dragStart(event, ${item.idx})" ondragover="dragOver(event)" ondrop="dropRow(event, ${item.idx})"` : ''} data-idx="${item.idx}">
              ${deleting ? `<td class="select-cell no-print"><input type="checkbox" data-account-select="${item.idx}" aria-label="삭제할 행 선택" /></td>` : ''}
              <td class="no-print favorite-cell"><button class="star-btn ${item.favorite ? 'on' : ''}" onclick="toggleFavorite(${item.idx})" title="빠른복사 ${item.favorite ? '해제' : '추가'}" type="button">${item.favorite ? '★' : '☆'}</button></td>
              <td class="site">
                <div class="site-label account-site-label">
                  <span class="site-badge">${esc(badgeText(item.site))}</span>
                  <div class="site-texts">
                    <div class="site-main-line">
                      <input class="table-input site-input" title="${esc(item.site)}" value="${esc(item.site)}" data-account-idx="${item.idx}" data-field="site" aria-label="사이트명 입력" />
                      ${String(item.url || "").trim() ? `<button class="open-url-btn no-print" onclick="openAccountUrl(${item.idx})" title="사이트 열기" type="button">↗ 열기</button>` : ""}
                    </div>
                    <input class="table-input memo-sub" title="${esc(item.memo)}" value="${esc(item.memo)}" data-account-idx="${item.idx}" data-field="memo" aria-label="메모 입력" />
                  </div>
                </div>
              </td>
              <td><div class="copy-cell account-copy-cell"><button class="copy-chip no-print" onclick="copyAccountField(${item.idx}, 'id')" title="아이디 복사" type="button">ID</button><input class="table-input" title="${esc(item.id)}" value="${esc(item.id)}" data-account-idx="${item.idx}" data-field="id" aria-label="아이디 입력" /></div></td>
              <td><div class="copy-cell account-copy-cell"><button class="copy-chip no-print" onclick="copyAccountField(${item.idx}, 'password')" title="비밀번호 복사" type="button">PW</button><input class="table-input" title="${esc(displayPw(item.password))}" type="${pwMode === 'mask' ? 'password' : 'text'}" value="${esc(item.password)}" data-account-idx="${item.idx}" data-field="password" aria-label="비밀번호 입력" /></div></td>
              ${showMove ? '<td class="no-print drag-cell"><button class="drag-handle" title="끌어서 순서 변경">☰</button></td>' : ''}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
  document.getElementById("accountGroups").innerHTML = filteredAccounts.length ? html : `<div class="empty">검색 결과가 없습니다.</div>`;
}

function render() { renderAccounts(); renderInfoCards(); }

function updateFromInput(target) {
  if (target.dataset.infoLabelKey) {
    const key = target.dataset.infoLabelKey;
    const idx = Number(target.dataset.infoIdx);
    if (state.info[key] && state.info[key][idx]) state.info[key][idx][0] = target.value;
    return;
  }
  if (target.dataset.infoKey) {
    const key = target.dataset.infoKey;
    const idx = Number(target.dataset.infoIdx);
    if (state.info[key] && state.info[key][idx]) state.info[key][idx][1] = target.value;
    return;
  }
  if (target.dataset.accountIdx) {
    const idx = Number(target.dataset.accountIdx);
    const field = target.dataset.field;
    if (state.accounts[idx] && field) state.accounts[idx][field] = target.value;
  }
}

document.addEventListener("input", e => {
  if (e.target.matches(".inline-input, .table-input, .label-input")) updateFromInput(e.target);
});

function syncInputs() { document.querySelectorAll(".inline-input, .table-input, .label-input").forEach(updateFromInput); }

function addInfoRow(key) {
  syncInputs();
  if (!state.info[key]) state.info[key] = [];
  state.info[key].push(["새 항목", ""]);
  render(); showToast("행을 추가했어요. 입력 후 이 PC에 저장을 눌러주세요.");
}

function toggleInfoDelete(key) {
  syncInputs();
  if (!deleteMode.info[key]) { deleteMode.info[key] = true; render(); showToast("삭제할 행을 선택한 뒤 다시 - 행 삭제를 눌러주세요."); return; }
  const selected = [...document.querySelectorAll(`input[data-info-select="${CSS.escape(key)}"]:checked`)].map(x => Number(x.dataset.idx));
  if (!selected.length) { deleteMode.info[key] = false; render(); return; }
  if (!confirm("선택한 행을 삭제할까요?")) return;
  state.info[key] = state.info[key].filter((_, idx) => !selected.includes(idx));
  deleteMode.info[key] = false;
  render(); showToast("선택한 행을 삭제했어요. 보관하려면 이 PC에 저장을 눌러주세요.");
}

function toggleAccountDelete(category) {
  syncInputs();
  category = "__all__";
  if (!deleteMode.account[category]) { deleteMode.account[category] = true; render(); showToast("삭제할 행을 선택한 뒤 다시 - 행 삭제를 눌러주세요."); return; }
  const selected = [...document.querySelectorAll('input[data-account-select]:checked')].map(x => Number(x.dataset.accountSelect));
  if (!selected.length) { deleteMode.account[category] = false; render(); return; }
  if (!confirm("선택한 행을 삭제할까요?")) return;
  state.accounts = state.accounts.filter((_, idx) => !selected.includes(idx));
  deleteMode.account[category] = false;
  render(); showToast("선택한 행을 삭제했어요. 보관하려면 이 PC에 저장을 눌러주세요.");
}

function addRowToCategory(category) {
  syncInputs();
  state.accounts.push({category: category || "기타", site:"", id:"", password:"", memo:"", url:"", favorite:false});
  render(); showToast("행을 추가했어요. 입력 후 이 PC에 저장을 눌러주세요.");
}
function addRow() { addRowToCategory("기타"); }
function dragStart(event, idx) {
  syncInputs();
  draggedIndex = idx;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(idx));
}
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}
function dropRow(event, targetIndex) {
  event.preventDefault();
  const from = draggedIndex ?? Number(event.dataTransfer.getData("text/plain"));
  const to = Number(targetIndex);
  draggedIndex = null;
  if (!Number.isInteger(from) || !Number.isInteger(to) || from === to) return;
  const [moved] = state.accounts.splice(from, 1);
  state.accounts.splice(from < to ? to - 1 : to, 0, moved);
  render(); showToast("순서를 바꿨어요. 보관하려면 이 PC에 저장을 눌러주세요.");
}

function deleteOneAccount(idx) {
  syncInputs();
  if (!confirm("이 행을 삭제할까요?")) return;
  state.accounts.splice(idx, 1);
  render();
  showToast("행을 삭제했어요. 보관하려면 이 PC에 저장을 눌러주세요.");
}
window.deleteOneAccount = deleteOneAccount;

window.copyText = copyText;
window.addInfoRow = addInfoRow; window.toggleInfoDelete = toggleInfoDelete; window.toggleAccountDelete = toggleAccountDelete; window.addRowToCategory = addRowToCategory; window.copyAccountField = copyAccountField;
window.dragStart = dragStart; window.dragOver = dragOver; window.dropRow = dropRow;

async function downloadTemplate() {
  // 기본 입력파일은 현재 JS에서 직접 생성합니다. URL 칸까지 포함되어 있어 사용자가 엑셀에서 관리하기 쉽습니다.
  const wb = XLSX.utils.book_new();
    const infoRows = [["구분", "항목", "값"]];
    for (const [key, label] of [["school","학교 공통 정보"],["bank","은행 계좌 정보"],["card","결제 수단"]]) {
      state.info[key].forEach(([name, value]) => infoRows.push([label, name, value]));
    }
    const inputRows = [["사이트명", "아이디", "비밀번호", "메모", "URL", "즐겨찾기"]];
    DEFAULT_ACCOUNTS.forEach(a => inputRows.push([a.site, a.id, a.password, a.memo, a.url || "", a.favorite ? "Y" : ""]));
    const infoWs = XLSX.utils.aoa_to_sheet(infoRows);
    const accWs = XLSX.utils.aoa_to_sheet(inputRows);
    infoWs["!cols"] = [{wch:18},{wch:24},{wch:36}];
    accWs["!cols"] = [{wch:34},{wch:24},{wch:24},{wch:42},{wch:46},{wch:10}];
    XLSX.utils.book_append_sheet(wb, infoWs, "기본정보");
    XLSX.utils.book_append_sheet(wb, accWs, "계정입력");
    XLSX.writeFile(wb, "학교키박스_기본입력파일.xlsx");
    showToast("URL 칸이 포함된 기본엑셀 입력파일을 다운로드했어요.");
}

function parseUploadedWorkbook(wb) {
  let newInfo = structuredClone(DEFAULT_INFO);
  let newAccounts = [];
  if (wb.SheetNames.includes("기본정보")) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets["기본정보"], {header:1, defval:""});
    newInfo = {school:[], bank:[], card:[]};
    rows.slice(1).forEach(([group, label, value]) => {
      const g = String(group || "");
      const key = g.includes("은행") ? "bank" : g.includes("결제") || g.includes("카드") ? "card" : "school";
      if (label) newInfo[key].push([String(label), String(value || "")]);
    });
    for (const k of ["school","bank","card"]) if (!newInfo[k].length) newInfo[k] = structuredClone(DEFAULT_INFO[k]);
  }
  if (wb.SheetNames.includes("계정입력")) {
    const rows = XLSX.utils.sheet_to_json(wb.Sheets["계정입력"], {header:1, defval:""});
    const header = (rows[0] || []).map(x => String(x || "").trim());
    const isOld = header[0]?.includes("분류");
    newAccounts = rows.slice(1).filter(r => String(r[0] || r[1] || "").trim() && !["…", "..."].includes(String(r[0] || r[1]).trim())).map(r => {
      if (isOld) return { category:String(r[0] || "기타"), site:normalizeSiteName(r[1] || ""), id:String(r[2] || ""), password:String(r[3] || ""), memo:String(r[4] || ""), url:String(r[5] || ""), favorite:/^(y|yes|true|1|★)$/i.test(String(r[6] || "")) };
      const urlCol = header.findIndex(h => /url|접속|링크|주소/i.test(h));
      const favCol = header.findIndex(h => /즐겨|favorite/i.test(h));
      const defaultFavCol = urlCol >= 0 ? 5 : 4;
      return { category:"기타", site:normalizeSiteName(r[0] || ""), id:String(r[1] || ""), password:String(r[2] || ""), memo:String(r[3] || ""), url:String(urlCol >= 0 ? r[urlCol] || "" : ""), favorite:/^(y|yes|true|1|★)$/i.test(String((favCol >= 0 ? r[favCol] : r[defaultFavCol]) || "")) };
    });
  } else {
    // 사용자가 올린 기존 예쁜 양식도 최대한 읽기: B=사이트명, C=아이디, E=비밀번호, F=메모, I=접속
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {header:1, defval:""});
    let currentCategory = "기타";
    rows.forEach(r => {
      const b = String(r[1] || "").trim();
      if (!b || b === "사이트명" || b.includes("학교계정") || b.includes("학교 공통") || b.includes("계좌정보") || b.includes("결제 수단") || b.includes("사이트 계정 관리")) return;
      if (/^[0-9]️⃣/.test(b)) { currentCategory = b; return; }
      if (currentCategory !== "기타") newAccounts.push({category:currentCategory, site:normalizeSiteName(b), id:String(r[2] || ""), password:String(r[4] || ""), memo:String(r[5] || ""), url:String(r[8] || "")});
    });
  }
  state = {info:newInfo, accounts: normalizeAccountDefaults(newAccounts.length ? newAccounts : structuredClone(DEFAULT_ACCOUNTS))};
  deleteMode = { info: {}, account: {} };
  render(); showToast(`엑셀을 불러왔어요. 사이트 계정 ${state.accounts.length}개를 적용했어요.`);
}

function handleUpload(file) {
  if (!file) return;
  const reader = new FileReader();

  reader.onload = e => {
    try {
      const data = e.target.result;
      const wb = XLSX.read(data, { type: "array" });
      parseUploadedWorkbook(wb);
      const uploadInput = document.getElementById("uploadInput");
      if (uploadInput) uploadInput.value = "";
    } catch (err) {
      console.error(err);
      showToast("엑셀 업로드 실패: 기본엑셀 입력파일인지 확인해 주세요.");
    }
  };

  reader.onerror = () => showToast("엑셀 파일을 읽지 못했어요. 다시 선택해 주세요.");
  reader.readAsArrayBuffer(file);
}

function saveLocal() { syncInputs(); localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); showToast("이 PC 브라우저에 저장했어요."); }
function loadLocal() { const raw=localStorage.getItem(STORAGE_KEY); if (!raw) return showToast("저장된 내용이 없어요."); state=JSON.parse(raw); state.accounts = normalizeAccountDefaults(state.accounts); deleteMode = { info: {}, account: {} }; render(); showToast("저장 내용을 불러왔어요."); }
function resetAll() { if (!confirm("기본값으로 초기화할까요?")) return; state={info:structuredClone(DEFAULT_INFO), accounts:normalizeAccountDefaults(structuredClone(DEFAULT_ACCOUNTS))}; deleteMode = { info: {}, account: {} }; render(); showToast("초기화했어요."); }

async function exportPrettyExcel() {
  syncInputs();
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("계정모음", {views:[{showGridLines:false}]});
  ws.columns = [{width:3},{width:28},{width:24},{width:3},{width:24},{width:32},{width:3},{width:24},{width:28}];
  for (let r=1; r<=120; r++) for (let c=1; c<=9; c++) {
    const cell=ws.getCell(r,c); cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF3F5F7"}}; cell.font={name:"맑은 고딕",size:10,color:{argb:"FF202632"}};
  }
  ws.mergeCells("B2:F2"); ws.getCell("B2").value="학교계정 ID.PW 모음"; ws.getCell("B2").font={name:"맑은 고딕",size:20,bold:true,color:{argb:"FF202632"}};
  ws.getCell("I2").value="출력일: " + new Date().toISOString().slice(0,10); ws.getCell("I2").alignment={horizontal:"right"}; ws.getCell("I2").font={name:"맑은 고딕",size:10,color:{argb:"FF8D98A8"}};
  makeExcelCard(ws, 4, 2, "학교 공통정보", state.info.school, 14);
  makeExcelCard(ws, 4, 5, "🪙 은행. 계좌정보", state.info.bank, 14);
  makeExcelCard(ws, 4, 8, "결제 수단", state.info.card, 14);
  let row = 20;
  ws.mergeCells(row,2,row,6); ws.getCell(row,2).value="사이트 계정 관리"; ws.getCell(row,2).font={name:"맑은 고딕",size:14,bold:true,color:{argb:"FF1683FF"}}; row++;
  const grouped = state.accounts.reduce((a,x)=>((a[x.category||"기타"] ||= []).push(x),a),{});
  for (const [cat, items] of Object.entries(grouped)) {
    ws.mergeCells(row,2,row,6); const gc=ws.getCell(row,2); gc.value=cat; gc.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFEAF4FF"}}; gc.font={name:"맑은 고딕",size:11,bold:true,color:{argb:"FF2C69B8"}}; row++;
    const heads=["사이트명","아이디","","비밀번호","메모"];
    heads.forEach((h,i)=>{ const cell=ws.getCell(row,2+i); cell.value=h; cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFFFFFF"}}; cell.font={name:"맑은 고딕",size:9,bold:true,color:{argb:"FF9AA4B2"}}; cell.border={bottom:{style:"thin",color:{argb:"FFE8EDF2"}}}; }); row++;
    items.forEach(item => {
      ws.getCell(row,2).value=item.site; ws.getCell(row,3).value=item.id; ws.getCell(row,5).value=displayPw(item.password); ws.getCell(row,6).value=item.memo;
      for (let c=2;c<=6;c++){ const cell=ws.getCell(row,c); cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFFFFFF"}}; cell.border={bottom:{style:"thin",color:{argb:"FFE8EDF2"}}}; cell.alignment={vertical:"middle",wrapText:true}; }
      ws.getCell(row,2).font={name:"맑은 고딕",size:10,bold:true,color:{argb:"FF202632"}}; row++;
    }); row++;
  }
  const buffer = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), "학교계정마스터_예쁜출력.xlsx");
}
function makeExcelCard(ws, startRow, startCol, title, rows, height) {
  for (let r=startRow;r<startRow+height;r++) for (let c=startCol;c<=startCol+1;c++) {
    const cell=ws.getCell(r,c); cell.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFFFFFF"}}; cell.border={bottom:{style:"thin",color:{argb:"FFE8EDF2"}}}; cell.alignment={vertical:"middle",wrapText:true};
  }
  ws.mergeCells(startRow,startCol,startRow,startCol+1); const t=ws.getCell(startRow,startCol); t.value=title; t.font={name:"맑은 고딕",size:13,bold:true,color:{argb:"FF1683FF"}};
  rows.slice(0,height-1).forEach((x,i)=>{ const r=startRow+1+i; ws.getCell(r,startCol).value=x[0]; ws.getCell(r,startCol).font={name:"맑은 고딕",size:9,bold:true,color:{argb:"FF96A0AF"}}; ws.getCell(r,startCol+1).value=displayInfoValue(x[0], x[1]); });
}


function getSchoolEmailPrefix() {
  const row = (state.info.school || []).find(([label]) => String(label || "").replace(/\s+/g, "") === "학교메일");
  const email = String(row?.[1] || "school").trim();
  const prefix = (email.split("@")[0] || "school").replace(/[^a-zA-Z0-9가-힣_-]/g, "_");
  return prefix || "school";
}
function getTimestampForFilename() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${yy}${mm}${dd}_${hh}${mi}`;
}
function exportBasicExcel() {
  syncInputs();
  const wb = XLSX.utils.book_new();
  const infoRows = [["구분", "항목", "값"]];
  for (const [key, label] of [["school","학교 공통 정보"],["bank","은행 계좌 정보"],["card","결제 수단"]]) {
    (state.info[key] || []).forEach(([name, value]) => infoRows.push([label, name, value]));
  }
  const accountRows = [["사이트명", "아이디", "비밀번호", "메모", "URL", "즐겨찾기"]];
  state.accounts.forEach(a => accountRows.push([a.site || "", a.id || "", a.password || "", a.memo || "", a.url || "", a.favorite ? "Y" : ""]));
  const infoWs = XLSX.utils.aoa_to_sheet(infoRows);
  const accWs = XLSX.utils.aoa_to_sheet(accountRows);
  infoWs["!cols"] = [{wch:18},{wch:24},{wch:36}];
  accWs["!cols"] = [{wch:34},{wch:24},{wch:24},{wch:42},{wch:46},{wch:10}];
  XLSX.utils.book_append_sheet(wb, infoWs, "기본정보");
  XLSX.utils.book_append_sheet(wb, accWs, "계정입력");
  XLSX.writeFile(wb, `${getSchoolEmailPrefix()}_${getTimestampForFilename()}.xlsx`);
  showToast("현재 내용을 기본 입력파일 형식으로 다운로드했어요.");
}


const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 500);
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.getElementById("downloadTemplateBtn").onclick = downloadTemplate;
document.getElementById("uploadInput").onchange = e => e.target.files[0] && handleUpload(e.target.files[0]);
document.getElementById("saveBtn").onclick = saveLocal;
document.getElementById("loadSavedBtn").onclick = loadLocal;
document.getElementById("exportExcelBtn").onclick = exportBasicExcel;
document.getElementById("printBtn").onclick = () => { syncInputs(); render(); setTimeout(() => window.print(), 50); };
document.getElementById("resetBtn").onclick = resetAll;
const accountSearchEl = document.getElementById("accountSearch");
if (accountSearchEl) accountSearchEl.oninput = e => { accountSearchTerm = e.target.value; renderAccounts(); };
const clearSearchBtn = document.getElementById("clearSearchBtn");
if (clearSearchBtn) clearSearchBtn.onclick = () => { accountSearchTerm = ""; if (accountSearchEl) accountSearchEl.value = ""; renderAccounts(); };
document.querySelectorAll("input[name='pwMode']").forEach(el => el.onchange = e => { pwMode=e.target.value; render(); });
render();
