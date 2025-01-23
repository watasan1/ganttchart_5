// JavaScriptコード
document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".gantt-task");
    const modal = document.getElementById("task-modal");
    const closeModalButton = modal.querySelector(".modal__close");
    const modalDescription = document.getElementById("modal-description");
    const modalTitle = modal.querySelector(".modal-title");
  
    // タスク詳細情報
    const taskDetails = {
      1: { title: "紫プロジェクト", description: "紫プロジェクトは以下のようにやりました。" },
      2: { title: "不登校対策", description: "不登校対策について私はこう思い、〇〇市では、年間〇〇万円を支給し対応を図っています。" },
      3: { title: "フリースクール支援", description: "Task 3の詳細情報です。" },
      4: { title: "子ども食堂経済的支援", description: "Task 4の詳細情報です。" },
      5: { title: "フードバンク設立", description: "Task 5の詳細情報です。" },
      6: { title: "歴史・観光拠点つくしちゃんカフェオープン", description: "Task 6の詳細情報です。" },
      7: { title: "インバウンド対策", description: "Task 7の詳細情報です。" },
      8: { title: "観光パネル設置、高架下LED化", description: "Task 8の詳細情報です。" },
      9: { title: "産後ケア通所型、宿泊型導入", description: "Task 9の詳細情報です。" },
      10: { title: "パパのための育児講座", description: "Task 10の詳細情報です。" },
    };
  
    // 各タスクにクリックイベントを追加
    tasks.forEach(task => {
      task.addEventListener("click", () => {
        const taskId = task.getAttribute("data-task");
  
        // タスクIDがtaskDetailsに存在する場合、詳細情報を設定
        if (taskDetails[taskId]) {
          modalTitle.textContent = taskDetails[taskId].title;
          modalDescription.textContent = taskDetails[taskId].description;
        } else {
          modalTitle.textContent = "詳細情報なし";
          modalDescription.textContent = "このタスクに関する情報はありません。";
        }
  
        modal.classList.add("open");
      });
    });
  
    // モーダルを閉じるイベント
    closeModalButton.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  
    // モーダル外をクリックして閉じる
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
  });
  