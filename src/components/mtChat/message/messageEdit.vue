<template>
  <div class="message-edit-container">
    <div style="position: relative">
      <div
        class="message-edit-content"
        contenteditable="true"
        @keydown="keydownHandler"
        @paste="pasteHandler"
        @input="inputHandler"
        ref="editor"
      ></div>
      <div
        class="message-edit-placeholder"
        :style="{ display: editData.value.length ? 'none' : 'block' }"
      >
        请输入
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const editData = reactive({
  value: "",
  // 操作记录
  
});

const createdElement = (data) => {
  // 判断类型生成dom结构和数据
};

const editor = ref<Element>();

const pasteHandler = (event) => {
  event.preventDefault();
  let items = (event.clipboardData || event.originalEvent.clipboardData).items;
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  if (!items.length) {
    return;
  }
  const selection = window.getSelection() as Selection;
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  for (const item of items) {
    console.log(item, "item");
    if (item.kind == "string" && item.type.match("^text/plain")) {
      // 遍历拖拽项的内容
      item.getAsString((s: any) => {
        console.log(s, "string");
        // event.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind == "string" && item.type.match("^text/html")) {
      // 拖拽项的数据是 HTML
      item.getAsString((s: any) => {
        console.log(s, "html");
        // event.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind == "string" && item.type.match("^text/uri-list")) {
      // 拖拽项的数据是 URI
      console.log("... Drop: URI");
    } else if (item.kind == "file" && item.type.match("^image/")) {
      // 拖拽项的数据是一个图片
      var f = item.getAsFile();
      var reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = () => {
        console.log(reader.result); // base64
        const img = document.createElement("img");
        img.classList.add("message-image");
        img.src = reader.result as string;
        editor.value!.appendChild(img);
        selection.getRangeAt(0).insertNode(img);
        selection.collapseToEnd();
      };
      console.log("... Drop: File ", f);
    }
  }
  editData.value = event.target.innerHTML;

  /* const selection = window.getSelection();
  if (!selection!.rangeCount) return;
  selection.deleteFromDocument();

  const text = document.createElement("h1");
  text.textContent = "123";
  selection.getRangeAt(0).insertNode(text);
  selection.collapseToEnd(); */

  // let paste2 = (event.clipboardData || window.clipboardData).getData("text/uri-list");
  // for (const index of items) {
  //   var item = items[index];
  //   if (item.kind == "string" && item.type.match("^text/plain")) {
  //     // 遍历拖拽项的内容
  //     item.getAsString((s: any) => {
  //       event.target.appendChild(document.getElementById(s));
  //     });
  //   } else if (item.kind == "string" && item.type.match("^text/html")) {
  //     // 拖拽项的数据是 HTML
  //     console.log("... Drop: HTML");
  //   } else if (item.kind == "string" && item.type.match("^text/uri-list")) {
  //     // 拖拽项的数据是 URI
  //     console.log("... Drop: URI");
  //   } else if (item.kind == "file" && item.type.match("^image/")) {
  //     // 拖拽项的数据是一个图片
  //     var f = item.getAsFile();
  //     console.log("... Drop: File ", f);
  //   }
  // }
};

const keydownHandler = (e) => {
  console.log("e", e);
};

const inputHandler = (e) => {};
</script>

<style scoped lang="scss">
.message-edit-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: -16px -16px 0;
  background-color: #fff;
  .message-edit-content {
    max-height: 200px;
    overflow-y: auto;
    outline: none;
    padding: 20px;
    line-height: 20px;
  }
  .message-edit-placeholder {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    pointer-events: none;
    user-select: none;
    color: #999;
  }
}
</style>
